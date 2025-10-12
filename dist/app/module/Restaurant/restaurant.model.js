"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
const mongoose_1 = require("mongoose");
const restaurantSchema = new mongoose_1.Schema({
    name: String,
    cuisineType: String,
    image: String,
    deliveryTime: String,
    menu: [
        { name: String, price: Number, image: String }
    ]
}, {
    collection: "Restaurants",
    versionKey: false,
    timestamps: true
});
exports.Restaurant = (0, mongoose_1.model)("Restaurant", restaurantSchema);
