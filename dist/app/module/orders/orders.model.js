"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    customerName: String,
    customerEmail: String,
    restaurantId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true,
    },
    items: [{ name: String, price: Number, quantity: Number }],
    totalAmount: Number,
    estimatedDelivery: String,
}, {
    collection: "orders",
    versionKey: false,
    timestamps: true
});
exports.Order = (0, mongoose_1.model)("Order", orderSchema);
