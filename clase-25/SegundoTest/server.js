import express from 'express';
import session from 'express-session';
import ephbs from 'handlebars';
const express = require('express');

const app = express();



//Servidor
const PORT = 4141;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`)
})
server.on('error', error => {
    console.error(`Error en el servidor ${error}`);
});