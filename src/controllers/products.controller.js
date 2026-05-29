import productsDAO from "../daos/products.dao.js";

const productsControllers = {};

// Mostrar todos los productos
productsControllers.getAll = async (req, res) => {
    productsDAO.getAll()
    .then((products) => {
        res.json({
            data: products, 
        });
    })
    .catch((error) => {
        res.status(500).json({ error: error });
    });
};

// Buscar un producto por codigo de barras
productsControllers.getOne = async (req, res) => {
    productsDAO
    .getOne(req.params.barcode) 
    .then((product) => {
        if(product){
            res.json({ data: product });
        }else{
            res.status(404).json({ error: "Producto no encontrado." });
        }
    })
    .catch((error) => {
        console.error("Error para encotrar el producto: ", error);
        res
        .status(500)
        .json({ error: "Se produjo un error para encotrar el producto." });
    });
};

// Insertar un producto
productsControllers.insertOne = async (req, res) => {
    const product = req.body;
    productsDAO
    .insertOne(product)
    .then((response) => {
        res.json({
            message: "Producto insertado correctamente.",
            product: response,
        });
    })
    .catch((error) => {
        console.error("Error para insertar el producto: ", error);
        res
        .status(500)
        .json({ error: "Hubo un error para insertar el producto." });
    });
};

// Actualizar un producto
productsControllers.updateOne = async (req, res) => {
    const barcode = req.params.barcode;
    const updateData = req.body;
    productsDAO
    .updateOne(barcode, updateData)
    .then((updatedProduct) => {
        if(updatedProduct) {
            res.json({
                message: "Producto actualizado correctamente.",
                product: updatedProduct
            });
        } else {
            res.status(404).json({ error: "El producto no se encontro para actualizar." });
        }
    })
    .catch((error) => {
        console.error("Error para actualizar el producto: ", error);
        res.status(500).json({ error: "Hubo un error para poder actualizar el prodcuto." });
    });
};

// Eliminar un producto
productsControllers.deleteOne = async (req, res) => {
    const barcode = req.params.barcode;
    productsDAO
    .deleteOne(barcode)
    .then((deletedProduct) => {
        if(deletedProduct) {
            res.json({
                message: "Producto eliminado correctamente",
                product: deletedProduct
            });
        } else {
            res.status(404).json({ error: "El producto no se encontro para eliminar." });
        }
    })
    .catch((error) => {
        console.error("Error al eliminar el producto: ", error);
        res.status(500).json({ error: "Hubo un error para poder eliminar el producto." });
    });
};

export default productsControllers;