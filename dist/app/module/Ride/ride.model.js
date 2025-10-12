"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rider = exports.Ride = void 0;
const mongoose_1 = require("mongoose");
const rideSchema = new mongoose_1.Schema({
    customerName: { type: String, trim: true },
    pickup: String,
    userEmail: String,
    destination: String,
    vehicleType: String,
    driverName: String,
    fare: Number,
    estimatedArrival: String,
}, {
    versionKey: false,
    timestamps: true,
    collection: "rides"
});
const riderSchema = new mongoose_1.Schema({
    vehicleType: String,
    driverName: String,
    fare: Number,
    estimatedArrival: String,
});
exports.Ride = (0, mongoose_1.model)("Ride", rideSchema);
exports.Rider = (0, mongoose_1.model)("Rider", riderSchema);
