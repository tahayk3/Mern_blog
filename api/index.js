import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

//Configamos variable de ambiente
dotenv.config();

//conexion a la base de datos
mongoose.connect(process.env.MONGO)
.then(()=>{console.log("Database is connected")},)
.catch((error)=>{console.log(error)});

const app = express();

app.listen(3000,()=>{
    console.log('Server is running on: localhost:3000');
});

app.get("/", (req,res)=>{
    res.send("ESTA ES LA RUTA PRINCIPAL");
});