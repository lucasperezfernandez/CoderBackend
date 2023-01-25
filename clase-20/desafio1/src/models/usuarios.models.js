import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    dni: {type: String, required: true, unique: true}

});

export const usuarioModel = model('usuarios', usuarioSchema)