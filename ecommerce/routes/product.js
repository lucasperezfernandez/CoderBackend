const Product = require("../models/Product.js");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken.js");

const router = require("express").Router();


//CREATE
router.post("/",verifyTokenAndAdmin, async  (req,res)=>{
    const newProduct = new Product(req.body)
    try {
        const savedProduct = await newProduct.save();
        res,satus(200).json(savedProduct)
    } catch (err) {
        res.status(500).json(err);
    }
})

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req,res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Producto eliminado...")
    } catch (err) {
        res.status(500).json(err)
    }
})



//GET PRODUCT BY ID
router.get("/:id", async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({msg: `No existe producto con ID: ${req.params.id}`});
        
    }
})


//GET ALL PRODUCTS
router.get("/", async (req,res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let products;
        if(qNew){
            products = await Product.find().sort({createdAt: -1})
        }else if(qCategory){
            products = await Product.find({categories:{
                $in:[qCategory],
            },
        });
        }else {
            products = await Product.find();
        }

        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err)
    }
})


// //GET PRODUCT BY CATEGORY
// router.get("/:category", async (req,res)=>{
//     console.log(req.params.category)
//     const product = await Product.find();
//     res.status(200).json(product);
// })



module.exports = router