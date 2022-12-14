//npm init -y
//npm i express
//npm i morgan --save --dev
// MODULOS
const express = require('express');
const morgan = require('morgan');

// INSTANCIA DE SERVER
const app = express();
const routerMascotas = require('./src/routes/mascotas.routes');
const routerPersonas = require('./src/routes/personas.routes');

// ----------------Middlewares----------------
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))

app.use((req, res, next)=>{
    console.log(`Middleware de App se ejecuta con todos`);
    next();
});

// ----------------Rutas----------------------
app.use('/api/mascotas', routerMascotas);
app.use('/api/personas', routerPersonas);

app.get('/error', (erq, res)=>{
    let x = 1/0;
    res.status(200).send(x);
})
//Errores globales
app.use((err ,req, res, next)=>{
    res.status(err.status || 500).send('Something broke!')
});



// SERVIDOR
const PORT = 8081;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
})
server.on('error', error => {
    console.error(`Error en el servidor ${error}`);
});


//clase 8  1:35:00