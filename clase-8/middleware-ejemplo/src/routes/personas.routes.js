const express = require('express');
const routerPersonas = express.Router()

/*DB*/
const DB_PERSONAS = [{
    name: "horacio",
    edad: 20,
}];

routerPersonas.get('/', (req, res)=>{
    res.status(200).json(DB_PERSONAS);
});


routerPersonas.post('/', (req, res)=>{
    DB_PERSONAS.push(req.body);
    res.status(201).json({msg:'Agregado', data: req.body});
});


module.exports = routerPersonas;