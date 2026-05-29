import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI)
    .then((cnn) => console.log("Conectado a MongoDB."))
    .catch((error) => console.error("Error al conectar con MongoDB.", error));

export default mongoose;