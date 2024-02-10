import express from 'express';

const app = express();

app.listen(3000,()=>{
    console.log('Server is running on: localhost:3000');
});

app.get("/", (req,res)=>{
    res.send("ESTA ES LA RUTA PRINCIPAL");
});