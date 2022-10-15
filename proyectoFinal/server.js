//npm init -y && npm install express && npm install express socket.io && npm i morogan
const express = require('express');
const morgan = require('morgan');
const routerCarritos = require('./src/routes/carrito.routes.js');

//Instancias
const app = express();
const routerProductos = require('./src/routes/productos.routes.js');


//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'))

//RUTAS
app.use('/api/productos', routerProductos);
app.use('/api/carrito', routerCarritos);







//Servidor
const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`)
})
server.on('error', error => {
    console.error(`Error en el servidor ${error}`);
});

