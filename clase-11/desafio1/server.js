//npm init -y && npm intall express socket.io
//modulos
const express = require('express');
const path = require('path');
const { Server:HttpServer} = require('http');
const {Server: IOServer} = require('socket.io');

//instancias del servidor
const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

//Rutas
app.get('/', (req,res)=>{
    // console.log(path.join(__dirname, '/public', 'index.html'))
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
})

// Middlewares
app.use(express.static('public'));

//Servidor
const PORT = 3000;
const server = httpServer.listen(PORT, ()=>{
    console.log(`Escuchando al servidor en puerto http://localhost:${PORT}`);
});

io.on('connection', (socket)=>{
    console.log(`Nuevo cliente conectado! ${socket.id}`);
});