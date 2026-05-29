import Product from "../models/Products.js";

const productsDAO = {};

// Mostrar todos los productos
productsDAO.getAll = async () => {
    const products = await Product.find();
    return products;
};

// Buscar un producto por codigo de barras
productsDAO.getOne = async (barcode) => {
    const product = await Product.findOne({ barcode: barcode });
    return product;
};

// Insertar un producto
productsDAO.insertOne = async (product) => {
    const newProduct = await Product.create(product);
    return newProduct;
};

// Actualizar un producto
productsDAO.updateOne = async (barcode, product) => {
    const updatedProduct = await Product.findOneAndUpdate(
        { barcode: barcode }, 
        product
    );
    return updatedProduct;
};

// Eliminar un producto
productsDAO.deleteOne = async (barcode) => {
    const deletedProduct = await Product.findOneAndDelete({ barcode: barcode });
    return deletedProduct;
};

export default productsDAO;