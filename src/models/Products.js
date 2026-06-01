import { Schema, model } from "mongoose";

const productSchema = new Schema({
    barcode:{ type:String, required:true, unique:true },
    description:String,
    brand:String,
    cost:Number,
    price: Number,
    stock: Number,
    expired_date:String
}, {
    timestamps:true,
    versionKey: false
});

export default model("Product", productSchema);