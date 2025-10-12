"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rideService = void 0;
const appError_1 = __importDefault(require("../../middlewares/appError"));
const ride_model_1 = require("./ride.model");
const addRiders = async (payload) => {
    try {
        const result = await ride_model_1.Rider.create(payload);
        return result;
    }
    catch (error) {
        throw new appError_1.default("something went wrong", 500);
    }
};
const getRiders = async (vehicleType) => {
    try {
        const result = await ride_model_1.Rider.find({ vehicleType });
        return result;
    }
    catch (error) {
        throw new appError_1.default("something went wrong", 500);
    }
};
const bookRides = async (payload) => {
    try {
        const result = await ride_model_1.Ride.create(payload);
        return result;
    }
    catch (error) {
        console.log(error);
        return error;
    }
};
const getUserRide = async (email) => {
    try {
        const result = await ride_model_1.Ride.find({ userEmail: email });
        if (!result) {
            throw new appError_1.default('rides not found', 404);
        }
        return result;
    }
    catch (error) {
        console.log(error);
        return error;
    }
};
const getRideDetails = async (id) => {
    try {
        const rideDetails = await ride_model_1.Ride.findById(id);
        if (!rideDetails) {
            throw new appError_1.default('ride details not found', 404);
        }
        return rideDetails;
    }
    catch (error) {
        console.log(error);
        return error;
    }
};
exports.rideService = {
    addRiders,
    bookRides,
    getUserRide,
    getRideDetails,
    getRiders
};
