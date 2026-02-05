import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    userId: { type: String, required: true, re: "user"},
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    offerPrice: { type: Number, required: true },
    imageUrl: { type: Array, required: true },
    category: { type: String, required: true },
    date: { type: Number, required: true },
})


const Product = mongoose.models.product || mongoose.model("product", ProductSchema);

export default Product;