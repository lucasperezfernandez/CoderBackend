const Cart = require("../models/Cart.js");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken.js");

const router = require("express").Router();


//CREATE
router.post("/",verifyToken, async  (req,res)=>{
    const newCart = new Cart(req.body)
    try {
        const savedCart = await newCart.save();
        res,satus(200).json(savedCart)
    } catch (err) {
        res.status(500).json(err);
    }
})



//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req,res)=>{
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Carrito eliminado...")
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET USER CART
router.get("/:userId",verifyTokenAndAuthorization, async (req,res)=>{
    try {
        const cart = await Cart.findOne({userId: req.params.userId});
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET ALL 
router.get("/", verifyTokenAndAdmin, async (req,res)=>{
    try {
        const carts = await Cart.find();
        res.status(200).json(cart);
    } catch (err) {
        res.satus(500).json(err)
    }
})



module.exports = router