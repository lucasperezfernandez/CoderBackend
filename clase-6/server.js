const express = require('express');
const fs = require('fs');
const { title } = require('process');

const app = express()
const productos = fs.readFileSync('./src/productos.txt')
app.get('/', (request, response)=>{
    response.send('Servidor iniciado con express!')
})

app.get('/productos', (request, response)=>{
    response.send(`${productos}`)
})

app.get('/productosRandom', (request, response)=>{
    response.send()
})

const PORT =8080
const server = app.listen(PORT, ()=>{
    console.log(`Servidor http escuchando en http://localhost:8080/`)
})