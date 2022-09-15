/* ---------------------- Modulos ----------------------*/
const express = require('express');

/* ---------------------- Instancia Server ----------------------*/
const app = express();

/* ---------------------- Middlewares ----------------------*/
app.use(express.static('./public'));
app.use(express.urlencoded({extended: true}));

//Motor de plantillas
app.set('views', './views');
app.set('view engine', 'pug');

//base de datos
const DB_PERSONAS = []

/* ---------------------- Rutas ----------------------*/
app.get('/', (req, res)=>{
    res.render('vista', {DB_PERSONAS});
});

app.post('/personas', (req, res)=>{
    DB_PERSONAS.push(req.body);
    console.log(DB_PERSONAS);
    res.redirect('/');
});

/* ---------------------- Servidor ----------------------*/
const PORT = 9090;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
});
server.on('error', err => console.log(`error en server ${err}`));

/*
    --install
    npm init -y && npm i express pug && nodemon server.js
*/
