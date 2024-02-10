import User from '../models/user.model.js';
import bcryptjs from "bcryptjs";
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) =>{

    //validacion, pidiendo todos los datos 
    const {username, email, password} = req.body;
    if(
        !username || 
        !email || 
        !password || 
        username === "" ||
        email === "" || 
        password === ""
        ){
        next(errorHandler(400, "Todos los datos son requeridos"));
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
       next(error);
    }
};