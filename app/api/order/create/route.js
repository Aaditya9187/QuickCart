import { inngest } from "@/config/inngest";
import Product from "@/models/Product";
import User from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function POST(request) {
    try {
        const { userId } = getAuth(request);
        const { address, items } = await request.json();

        if (!address || items.length === 0) {
            return NextResponse.json({ success: false, message: "Address and items are required" });
        }

        // Calculate total amount safely
        let amount = 0;
        for (const item of items) {
            const product = await Product.findById(item.product);
            if (!product) {
                console.warn("Product not found for ID:", item.product);
                continue;
            }
            amount += product.offerPrice * item.quantity;
        }

        const totalAmount = amount + Math.floor(amount * 0.02);

        await inngest.send({
            name: 'order/created',
            data: {
                userId,
                address,
                items,
                amount: totalAmount,
                date: Date.now()
            }
        });

        // Clear user cart after order creation
        const user = await User.findById(userId);
        if (user) {
            user.cart = [];
            await user.save();
        }

        return NextResponse.json({ success: true, message: "Order Placed" });

    } catch (err) {
        console.error(err);
        return NextResponse.json({ success: false, message: err.message });
    }
}
