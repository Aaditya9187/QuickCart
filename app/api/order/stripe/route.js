import Order from "../../../../models/Order";
import { inngest } from "../../../../config/inngest";
import Product from "../../../../models/Product";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(request) {
    try {

        const { userId } = getAuth(request);
        const { address, items } = await request.json();
        const origin = request.headers.get('origin');

        if (!address || items.length === 0) {
            return NextResponse.json({ success: false, message: "Address and items are required" });
        }

        let productData = []

        // Calculate total amount safely
        let amount = 0;
        for (const item of items) {
            const product = await Product.findById(item.product);
            productData.push({
                name: product.name,
                price: product.offerPrice,
                quantity: item.quantity
            })
            if (!product) {
                console.warn("Product not found for ID:", item.product);
                continue;
            }
            amount += product.offerPrice * item.quantity;
        }

        const totalAmount = amount + Math.floor(amount * 0.02);

        const order = await Order.create({
            userId,
            address,
            items,
            amount: totalAmount,
            date: Date.now(),
            paymentType: "Stripe"
        });

        await inngest.send({
            name: "order/created",
            data: {
                orderId: order._id,
                userId
            }
        });

        const tax = Math.round(amount * 0.02 * 100) / 100; // 2% tax

        // Prepare line items for Stripe Checkout
        const line_items = productData.map(item => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.name
                },
                unit_amount: Math.round(item.price * 100),
            },
            quantity: item.quantity
        }));

        // Add tax as another item
        line_items.push({
            price_data: {
                currency: "usd",
                product_data: {
                    name: "Tax (2%)"
                },
                unit_amount: Math.round(tax * 100),
            },
            quantity: 1
        });

        // Create a checkout session
        const session = await stripe.checkout.sessions.create({
            line_items,
            mode: 'payment',
            success_url: `${origin}/order-placed`,
            cancel_url: `${origin}/cart`,
            metadata: {
                orderId: order._id.toString(),
                userId
            }
        })

        const url = session.url;

        return NextResponse.json({ success: true, url });


    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: error.message });
    }
}