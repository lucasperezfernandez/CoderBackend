const express = require('express');
const routerProductos = express.Router();
const fs = require('fs');

//DB
const DB_PRODUCTOS = [
    {
        id:1,
        title:"PS3",
        price: 123
    },
    {
        id:2,
        title:"PS4",
        price: 456
    },
    {
        
        id:3,
        title:"PS5",
        price: 789
    }
]

//URL 
routerProductos.get('/', (req,res)=>{
    res.status(200).json(DB_PRODUCTOS);
});

routerProductos.get('/:id', (req,res)=>{
    try {
        const id = req.params.id;
        const indexObj = DB_PRODUCTOS.findIndex((o)=>o.id ==id)
        if(indexObj == -1){
            res.status(400).json({code:404, msg: `Producto ${id} no encontrado`})
        }
        res.status(200).json(DB_PRODUCTOS[indexObj])
    } catch (error) {
        console.log(error)
        res.status(500).json({code:500, msg:`Error al obtener ${req.method} ${req.url}`})
    }
});
routerProductos.post('/', (req,res)=>{
    console.log(req.body)
    DB_PRODUCTOS.push(req.body);
    res.status(201).json({msg: `Agregado`, data: req.body})
});

routerProductos.put('/:id', (req,res)=>{
    const id = req.params.id;
    const index = DB_PRODUCTOS.findIndex((o)=>o.id == id);
    if(index>=0){
        const updatedProduct = {id:id, ...req.body};
        DB_PRODUCTOS[index]= updatedProduct;
        console.log(updatedProduct)
        res.status(201).json({msg:`Modificado`, data:req.body});
    }
    else{
        res.status(404).send("No  se encuentra producto")
    }
});

routerProductos.delete('/:id', (req,res)=>{
    const id = req.params.id;
    const index = DB_PRODUCTOS.findIndex((o)=>o.id == id);
    if(index>=0){
        const deletedProduct = DB_PRODUCTOS.splice(index,1);
        res.send(deletedProduct)
    }else{
        res.status(404).send("No se encuentra producto")
    }
})

//Export
module.exports = routerProductos;