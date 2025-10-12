"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rideController = void 0;
const ride_service_1 = require("./ride.service");
const responseHandler_1 = require("../../../utils/responseHandler");
const createRider = async (req, res) => {
    try {
        const uploadRider = await ride_service_1.rideService.addRiders(req.body);
        return (0, responseHandler_1.successResponse)(res, 200, "rider created", uploadRider);
    }
    catch (error) {
        console.log(error);
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
};
const getRider = async (req, res) => {
    try {
        const riders = await ride_service_1.rideService.getRiders(req.params.vehicleType);
        return (0, responseHandler_1.successResponse)(res, 200, "rider found", riders);
    }
    catch (error) {
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
};
const bookRide = async (req, res) => {
    try {
        const booking = await ride_service_1.rideService.bookRides(req.body);
        return (0, responseHandler_1.successResponse)(res, 200, "booking success", booking);
    }
    catch (error) {
        console.log(error);
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
};
const getUserRide = async (req, res) => {
    try {
        const rides = await ride_service_1.rideService.getUserRide(req.params.email);
        return (0, responseHandler_1.successResponse)(res, 200, "rides find successfully", rides);
    }
    catch (error) {
        console.log(error);
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
};
const getRideDetails = async (req, res) => {
    try {
        const details = await ride_service_1.rideService.getRideDetails(req.params.id);
        return (0, responseHandler_1.successResponse)(res, 200, "details find successfully", details);
    }
    catch (error) {
        console.log(error);
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
};
exports.rideController = {
    getRideDetails,
    getUserRide,
    bookRide,
    createRider,
    getRider
};
