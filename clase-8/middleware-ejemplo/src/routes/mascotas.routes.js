const express = require('express');
const routerMascotas = express.Router()

/*DB*/
const DB_MASCOTAS = [{
    name: 'jesus'
}];

routerMascotas.use((req, res, next)=>{
    console.log(`Middleware de Ruta Mascotas ${Date.now()}`);
    next();
});

function middlewareGet(req, res, next){
    console.log(`Middleware de Ruta Mascotas ${req.method} /api/mascotas${req.url}`);
    next();
};

function middlewareGet2(req, res, next){
    console.log(`Middleware 2 de Ruta Mascotas ${req.method} /api/mascotas${req.url}`);
    next();
};

routerMascotas.get('/', middlewareGet,middlewareGet2, (req, res)=>{
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