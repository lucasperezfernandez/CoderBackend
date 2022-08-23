const express = require('express');
const routerMascotas = express.Router()

/*DB*/
const DB_MASCOTAS = [{
    name: 'jesus'
}];

routerMascotas.get('/', (req, res)=>{
    res.status(200).json(DB_MASCOTAS);
});

routerMascotas.get('/darPatita', (req, res)=>{
    res.status(200).json({msg:'Te da la patita'});
});


routerMascotas.post('/', (req, res)=>{
    console.log(req.body)
    DB_MASCOTAS.push(req.body);
    res.status(201).json({msg:'Agregado', data: req.body});
});


module.exports = routerMascotas;