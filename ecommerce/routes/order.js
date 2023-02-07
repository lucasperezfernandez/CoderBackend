const Order = require("../models/Order.js");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken.js");

const router = require("express").Router();


//CREATE
router.post("/",verifyToken, async  (req,res)=>{
    const newOrder = new Order(req.body)
    try {
        const savedOrder = await newOrder.save();
        res,satus(200).json(savedOrder)
    } catch (err) {
        res.status(500).json(err);
    }
})



//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req,res)=>{
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
router.get("/", verifyTokenAndAdmin, async (req,res)=>{
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (err) {
        res.satus(500).json(err)
    }
})






module.exports = router