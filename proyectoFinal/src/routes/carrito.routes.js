const { json } = require('express');
const express = require('express');
const routerCarritos = express.Router();
const fs = require('fs');

//DB
const DB_CARRITO = [

]


//prueba 


//2.a
routerCarritos.post('/', (req,res)=>{
    console.log(req.body)
    DB_CARRITO.push(req.body);
    res.status(200).json({msg:`Carrito creado`, data: req.body})
});


//2.b
routerCarritos.delete('/:id', (req,res)=>{
    const id = req.params.id;
    const index = DB_CARRITO.findIndex((o)=>o.id == id);
    if(index>=0){
        const deletedProduct = DB_CARRITO.splice(index,1);
        res.send(deletedProduct)
    }else{
        res.status(404).send("No se encuentra producto")
    }
})

// 2.c
routerCarritos.get('/:id/productos', (req,res)=>{
    try{
        const id = req.params.id;
        const indexObj = DB_CARRITO.findIndex((o)=>o.id ==id)
        if(indexObj == -1){
            res.status(400).json({code:404, msg: `Carrito ${id} no encontrado`})
        }
        res.status(200).json(DB_CARRITO[indexObj])
    }catch (error) {
        console.log(error)
        res.status(500).json({code:500, msg:`Error al obtener ${req.method} ${req.url}`})
    }
    
});

// //2.d NO SALIO BIEN
routerCarritos.post('/:id/productos', (req,res)=>{
    try{
        const id = req.params.id;
        const indexObj = DB_CARRITO.findIndex((o)=>o.id ==id)
        if(indexObj == -1){
            res.status(400).json({code:404, msg: `Carrito ${id} no encontrado`})
        }
        console.log(req.body)
        DB_CARRITO.push(req.body);
        res.status(200).json({msg:`Producto agregado`, data: req.body})
    }catch (error) {
        console.log(error)
        res.status(500).json({code:500, msg:`Error al obtener ${req.method} ${req.url}`})
    }
});

// //2.e NO SALE
// routerCarritos.delete('/:id/productos', (req,res)=>{

// });


//Export
module.exports = routerCarritos;