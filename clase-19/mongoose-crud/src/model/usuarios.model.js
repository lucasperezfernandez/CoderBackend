import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    email: {type: String, required: true},
    usuario: {type: String, required: true},
    password: {type: String, required: true}

})

export const usuarioModel = model('usuarios', usuarioSchema);