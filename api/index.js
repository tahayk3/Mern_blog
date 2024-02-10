import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js';
import authRoutes from "./routes/auth.route.js";

//Configamos variable de ambiente
dotenv.config();

//conexion a la base de datos
mongoose.connect(process.env.MONGO)
.then(()=>{console.log("Database is connected")},)
.catch((error)=>{console.log(error)});

const app = express();

//esta linea sirve para poder recibir json
app.use(express.json());


app.listen(3000,()=>{
    console.log('Server is running on: localhost:3000');
});

//llamando rutas
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

//Creando middlewere para manejar errores 
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Error interno del servidor";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});
