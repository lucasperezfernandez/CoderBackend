/* ---------------------- Modulos ----------------------*/
const express = require('express');
const path = require('path');

/* ---------------------- Instancia Server ----------------------*/
const app = express();

/* ---------------------- Middlewares ----------------------*/
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Motor de Plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Base de datos en memoria
const DB_PERSONAS = [
    {
        nombre: 'Albert',
        apellido: 'Einstein',
        edad: 30,
        avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-128.png'
    }
];

/* ---------------------- Rutas ----------------------*/
app.get('/', (req, res)=>{
    res.render('vista', {DB_PERSONAS});
});

app.post('/personas', (req, res) => {
    DB_PERSONAS.push(req.body);
    console.log(req.body);
    
    res.redirect('/')
});

/* ---------------------- Servidor ----------------------*/
const PORT = 9090
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))

/*
    --Install comands
    npm init -y && npm i express ejs
    nodemon server.js
*/
