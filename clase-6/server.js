const express = require('express');
const fs = require('fs');
const { title } = require('process');


const app = express()
const productos = JSON.parse(fs.readFileSync('./src/prodcutos.json', 'utf-8'))
class Prod{
    constructor(titulo,precio){
        this.titulo = titulo
        this.precio = precio
    }
    listarAll(){
        const objs = JSON.parse(fs.readFileSync(this.titulo, 'utf-8'))
        return [];
    }
}





// PAGINAS SERVER Y LO QUE MUESTRAN
app.get('/', (request, response)=>{
    response.send('Servidor iniciado con express!')
})

app.get('/productos', (request, response)=>{
    response.send(`${productos}`)
})

app.get('/productosRandom', (request, response)=>{
    response.send()
})

// SERVER
const PORT =8080
const server = app.listen(PORT, ()=>{
    console.log(`Servidor http escuchando en http://localhost:8080/`)
})

const prod = new Prod('./src/prodcutos.json')
console.log(productos)