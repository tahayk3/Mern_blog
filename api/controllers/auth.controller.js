import User from '../models/user.model.js';
import bcryptjs from "bcryptjs";

export const signup = async (req,res) =>{

    //validacion, pidiendo todos los datos 
    const {username, email, password} = req.body;
    if(!username || !email || !password || username === "" || email === "" || password === ""){
        return res.status(400).json({message: "todos los campos son requeridos"});
    }
    //cifrando contraseña 
    const hashedPassword = bcryptjs.hashSync(password, 10);

    //creando un objeto de usuario para enviarlo a la base de datos a partir del modelo
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });

    try{
        await newUser.save();
        res.json("Registro completo");
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}