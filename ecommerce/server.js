/*============================[Modulos]============================*/
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const exphbs = require("express-handlebars");
const session = require("express-session");
const path = require("path");

const userRoute = require("./routes/user.js")
const authRoute = require("./routes/auth.js")
const productsRoute = require("./routes/product.js")
const cartRoute = require("./routes/cart.js")
const orderRoute = require("./routes/order.js");


const User = require("./models/User.js");


dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URL)
    .then(()=> console.log("Successfull DB Connection"))
    .catch((err)=>{
        console.log(err);
    });


/*============================[Middlewares]============================*/
app.use(express.json());
app.use(express.urlencoded({extended: true}));

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

/*============================[Base de Datos]============================*/

/*============================[Rutas]============================*/

//INICIO CON REDIRECCION
app.get("/", (req,res)=>{
    res.redirect('/api/auth/login');
})



app.get("/api/test",(req,res)=>{
    res.render('test.hbs');
})
app.get("/test", async (req,res)=>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err)
    }
})





//MANUAL
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute); 
app.use("/api/products", productsRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);


/*============================[Servidor]============================*/

const server = app.listen(process.env.PORT || 5000 , ()=>{
    console.log(`Servidor escuchando en el puerto http://localhost:${process.env.PORT}`)
})
server.on('error', error => {
    console.error(`Error en el servidor ${error}`);
});

