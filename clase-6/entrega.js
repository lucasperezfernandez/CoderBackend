const express = require('express');
const fs = require('fs');
const app = express();

//constructor
class Productos{
    constructor(ruta){
        this.ruta = ruta
    };
    listarAll(){
        try {
            const objs =  fs.readFileSync(this.ruta, 'utf-8');
            // console.log(objs);
            // console.log(JSON.parse(objs))
            return objs;
        } catch (error) {
            return []
        }
    }
    getParse(){
        try {
            const objs = fs.readFileSync(this.ruta, 'utf-8');
            return JSON.parse(objs);
        } catch (error) {
            return[]
        }
    }
    listarRandom(id){
        try {
            const objs = this.getParse();
            const objId = objs.find((o)=>o.id == id)
            return JSON.stringify(objId)
        } catch (error) {
            'error'
        }
    }

}
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



const productos = new Productos('./src/prodcutos.json');


//Paginas del server
app.get('/', (req,res)=>{
    res.send('Servidor entrega iniciado con express')
});

app.get('/productos', (req, res)=>{
    res.send(`Array de productos del servidor \n ${productos.listarAll()}`)
});

app.get('/productosRandom', (req,  res)=>{
    res.send(`producto random \n ID: ${productos.listarRandom(random(1,3))}`)
});

//SERVER
const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
});

console.log(random(1,3))