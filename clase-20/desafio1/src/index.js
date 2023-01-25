import mongoose from "mongoose";
import { usuarioModel } from "./models/usuarios.models.js";
import { config } from "./utils/config.js";

const strConn= config.atlas.strConn;

Main();

async function Main(){
    try {
        await mongoose.connect(strConn);

        const lisUsuarios = [
            { nombre: 'Lucas', apellido: 'Blanco', dni: '30355874' },
            { nombre: 'María', apellido: 'García', dni: '29575148' },
            { nombre: 'Tomas', apellido: 'Sierra', dni: '38654790' },
            { nombre: 'Carlos', apellido: 'Fernández', dni: '26935670' }
        ]
        
        console.log('Usuarios insertados', await usuarioModel.insertMany(lisUsuarios));

        

    } catch (error) {
        console.log(error);
    }finally{
        await mongoose.disconnect()
    }
}