import express from "express";
import morgan from "morgan";
import productsRoutes from "./routes/products.routes.js";
const app=express();

//Middlewares
app.use(express.json());
app.use(morgan("dev"));
//Routes
app.use(productsRoutes);
//Start Server
export default app;