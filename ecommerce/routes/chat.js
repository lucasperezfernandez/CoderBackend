const Chat = require("../models/Chat.js");
const router = require("express").Router();


router.get('/', (req,res)=>{
    res.render('chat.hbs')
});




module.exports = router