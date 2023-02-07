const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {type: String, required: true, unique: true},
        email: { type: String, required: true, unique: true},
        password: {type: String, requided: true},
        isAdmin:{
            type: Boolean,
            default: false,
        },
        //AGREGAR ID???
    },
    {timestamps: true}
);

module.exports = mongoose.model("User", userSchema);