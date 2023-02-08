const Cart = require("../models/Cart.js");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken.js");

const router = require("express").Router();


//CREATE
router.post("/",verifyToken, async (req,res)=>{
    const newCart = new Cart(req.body)
    try {
        const savedCart = await newCart.save();
        res,satus(200).json(savedCart)
    } catch (err) {
        res.status(500).json(err);
    }
})



//DELETE
router.delete("/:id", async (req,res)=>{
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Carrito eliminado...")
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET USER CART
router.get("/:userId", verifyTokenAndAuthorization ,async (req,res)=>{
    try {
        const cart = await Cart.findOne({userId: req.params.userId});
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET ALL 
router.get("/", async (req,res)=>{
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (err) {
        res.satus(500).json(err)
    }
})

//UPDATE
// router.put("/:id", async(req,res)=>{
//     if(req.body.password){
//         req.body.password = CryptoJS.AES.encrypt(
//             req.body.password, 
//             process.env.PASS_SEC
//             ).toString();
//     }

//     try {
//         const updatedUser = await Cart.findByIdAndUpdate(
//             req.params.id,
//             {
//                 $set: req.body
//             },
//             { new: true }
//         );
//         res.status(200).json(updatedUser)
//     }

//     catch(err){
//         res.status(500).json(err);
//     }
// })

//UPDATE
router.put("/:id", verifyTokenAndAuthorization ,async(req,res)=>{
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true }
        );
        res.status(200).json(updatedCart)
    }

    catch(err){
        res.status(500).json(err);
    }
})





module.exports = router