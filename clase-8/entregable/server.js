const express = require('express');
const morgan = require('morgan');

//Instancias
const app = express();
const routerProductos = require('./src/routes/productos.routes.js');


//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'))

//RUTAS
app.use('/api/productos', routerProductos)







//Servidor
const PORT = 8081;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`)
})
server.on('error', error => {
    console.error(`Error en el servidor ${error}`);
});

