import Product from "@/models/Product";
import connectDB from "@/config/db";
import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

export async function GET(request, { params }) {
  try {
    await connectDB();
    const product = await Product.findById(params.id);
    if (!product) 
      return NextResponse.json({ success: false, message: "Product not found" });
    return NextResponse.json({ success: true, product });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message });
  }
}

export async function PUT(request, { params }) {
  try {
    const { userId } = getAuth(request);
    if (!userId) 
      return NextResponse.json({ success: false, message: "Unauthorized" });

    await connectDB();
    const product = await Product.findById(params.id);
    if (!product) 
      return NextResponse.json({ success: false, message: "Product not found" });

    // check using userId field from DB
    if (product.userId !== userId) 
      return NextResponse.json({ success: false, message: "Not allowed" });

    const data = await request.json();
    const { name, description, category, price, offerPrice } = data;

    product.name = name;
    product.description = description;
    product.category = category;
    product.price = price;
    product.offerPrice = offerPrice;

    await product.save();
    return NextResponse.json({ success: true, message: "Product updated successfully", product });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { userId } = getAuth(request);
    if (!userId) 
      return NextResponse.json({ success: false, message: "Unauthorized" });

    await connectDB();
    const product = await Product.findById(params.id);
    if (!product) 
      return NextResponse.json({ success: false, message: "Product not found" });

    // check using userId field from DB
    if (product.userId !== userId) 
      return NextResponse.json({ success: false, message: "Not allowed" });

    await product.deleteOne();
    return NextResponse.json({ success: true, message: "Product deleted successfully" });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message });
  }
}
