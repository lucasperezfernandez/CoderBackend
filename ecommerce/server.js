/*============================[Modulos]============================*/
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const exphbs = require("express-handlebars");
const session = require("express-session");
const path = require("path");
const {Server: HttpServer} = require('http');
const {Server: IOServer} = require('socket.io');

const userRoute = require("./routes/user.js")
const authRoute = require("./routes/auth.js")
const productsRoute = require("./routes/product.js")
const cartRoute = require("./routes/cart.js")
const orderRoute = require("./routes/order.js");
const chatRoute = require("./routes/chat.js");
const Chat = require("./models/Chat.js");

/* ---------------------- Instancia de servidor ----------------------*/
dotenv.config();
const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);


/*============================[Middlewares]============================*/
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/*---------------------- Base de datos ----------------------*/
mongoose.connect(process.env.MONGODB_URL)
    .then(()=> console.log("Successfull DB Connection"))
    .catch((err)=>{
        console.log(err);
    });

/*----------- Motor de plantillas -----------*/
app.set('views', 'src/views');
app.engine('.hbs', exphbs.engine({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'), 'layouts'),
    extname: '.hbs'
}))
app.set('view engine','.hbs');

/*----------- Session -----------*/
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 20000 //20 seg
    }
}))


/*============================[Rutas]============================*/

//INICIO CON REDIRECCION
app.get("/", (req,res)=>{
    res.redirect('/api/auth/login');
})

app.get('/chat', (req, res) => {
    res.redirect('/api/chat')
});


app.use("/api/users", userRoute);
app.use("/api/auth", authRoute); 
app.use("/api/products", productsRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/chat", chatRoute);


/*============================[Servidor]============================*/

const server = app.listen(process.env.PORT || 5000 , ()=>{
    console.log(`Servidor escuchando en el puerto http://localhost:${process.env.PORT}`)
})
server.on('error', error => {
    console.error(`Error en el servidor ${error}`);
});

/* ---------------------- WebSocket ----------------------*/
io.on('connection', (socket)=>{
    console.log(`Nuevo cliente conectado! ${socket.id}`);
    socket.emit('from-server-mensajes', {DB_MENSAJES});

    socket.on('from-client-mensaje', mensaje => {
        DB_MENSAJES.push(mensaje);
        io.sockets.emit('from-server-mensajes', {DB_MENSAJES});
    });
})