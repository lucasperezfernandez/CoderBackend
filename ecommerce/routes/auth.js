const router = require("express").Router();
const User = require("../models/User.js");
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');


//HBS

router.get('/login', (req,res)=>{
    res.render('login.hbs');
})


router.get('/register', (req,res)=>{
    res.render('register.hbs')
})



//REGISTRER
router.post("/register",async (req,res)=>{
    const newUser = new User({
        username: req.body.username,
        phone: req.body.phone,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password, process.env.PASS_SEC
            ).toString(),
    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser).render('login.hbs')
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
})


//LOGIN

router.post("/login", async (req,res)=>{
    try {
        const user = await User.findOne({username: req.body.username});
        !user && res.status(401).render("login-error.hbs")

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password, 
            process.env.PASS_SEC
            );
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);


        OriginalPassword !== req.body.password && res.status(401).render("login-error.hbs");

        const accessToken = jwt.sign(
            {
            id:user._id, 
            isAdmin: user.isAdmin,
        }, 
        process.env.JWT_SEC,
        {expiresIn:"3d"}
        )

        const {password, ...others} = user._doc;
        res.render('login-success.hbs');
    } catch (err) {
        console.log(err)
        // res.status(500).json(err); ESTO ME TIRA ERROR
    }
})





module.exports = router