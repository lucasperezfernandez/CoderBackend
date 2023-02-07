/*============================[Modulos]============================*/
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user.js")
const authRoute = require("./routes/auth.js")
const productsRoute = require("./routes/product.js")
const cartRoute = require("./routes/cart.js")
const orderRoute = require("./routes/order.js")

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

/*----------- Session -----------*/

/*============================[Base de Datos]============================*/


/*============================[Rutas]============================*/


app.get("/", (req,res)=>{
    res.redirect('/api/auth')
})
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

