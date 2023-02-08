const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema(
    {
        email:{type: String},
        msg:{type: String},
    },
    {timestamps: true}
);

module.exports = mongoose.model("Chat", ChatSchema);