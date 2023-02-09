const Order = require("../models/Order.js");
const nodemailer = require('nodemailer');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken.js");

const router = require("express").Router();


//CREATE
router.post("/", async  (req,res)=>{
    const newOrder = new Order(req.body)
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'efrain.bailey89@ethereal.email',
            pass: 'n31Yz84j14qU9WQmfw'
        }
    });

    let message = {
        from: 'Vendedor <mi@mail.com>',
        to: `"Cliente" <${newOrder.email}>`,
        subject: `'Nueva Orden de compra'`,
        text: `Datos de su orden de compra.
        Productos: ${newOrder.products} 
        Monto total: ${newOrder.amount} $ 
        Estado de su orden: ${newOrder.status}
        Email de contacto: ${newOrder.email}`,
        html: `<p>Datos de su orden de compra.
        Productos: ${newOrder.products} 
        Monto total: ${newOrder.amount} $ 
        Estado de su orden: ${newOrder.status}
        Email de contacto: ${newOrder.email}<p>`
    };

    try {
        const savedOrder = await newOrder.save();
        console.log(req.body.email)
        transporter.sendMail(message, (err, info) => {
            if (err) {
                res.status(500).json(err.message);
                console.log('Error occurred. ' + err.message);
                return process.exit(1);
            }else{
                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                res.status(200).json(req.body);
            }
        });
        res,satus(200).json(savedOrder)
    } catch (err) {
        res.status(500).json(err);
    }
})



//DELETE
router.delete("/:id", async (req,res)=>{
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Orden eliminada...")
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET USER ORDERS
router.get("/:userId",verifyTokenAndAuthorization, async (req,res)=>{
    try {
        const orders = await Order.find({userId: req.params.userId});
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET ALL 
router.get("/", async (req,res)=>{
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (err) {
        res.satus(500).json(err)
    }
})



module.exports = router