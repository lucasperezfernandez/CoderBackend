const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
    {
        userId: {type: String, required: true},
        email:{type: String},
        address:{type: String},
        products: [
            {
                productId:{
                    type:String
                },
                quantity: {
                    type: Number,
                    default: 1,
                }
            }
        ],
    },
    {timestamps: true}
);

module.exports = mongoose.model("Cart", CartSchema);