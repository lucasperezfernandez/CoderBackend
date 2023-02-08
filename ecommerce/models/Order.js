const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        userId: {type: String, required: true},
        products: [
            {
                productId:{
                    type:String
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
                price: {
                    type: Number,
                },
            }
        ],
        amount: {type: Number, required:true},
        email: {type: String, required: true},
        status:{type: String, default: "generated"}
    },
    {timestamps: true}
);

module.exports = mongoose.model("Order", OrderSchema);