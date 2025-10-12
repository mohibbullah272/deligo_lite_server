"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rideController = void 0;
const ride_service_1 = require("./ride.service");
const responseHandler_1 = require("../../../utils/responseHandler");
const createRider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const uploadRider = yield ride_service_1.rideService.addRiders(req.body);
        return (0, responseHandler_1.successResponse)(res, 200, "rider created", uploadRider);
    }
    catch (error) {
        console.log(error);
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
});
const getRider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const riders = yield ride_service_1.rideService.getRiders(req.params.vehicleType);
        return (0, responseHandler_1.successResponse)(res, 200, "rider found", riders);
    }
    catch (error) {
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
});
const bookRide = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const booking = yield ride_service_1.rideService.bookRides(req.body);
        return (0, responseHandler_1.successResponse)(res, 200, "booking success", booking);
    }
    catch (error) {
        console.log(error);
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
});
const getUserRide = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rides = yield ride_service_1.rideService.getUserRide(req.params.email);
        return (0, responseHandler_1.successResponse)(res, 200, "rides find successfully", rides);
    }
    catch (error) {
        console.log(error);
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
});
const getRideDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const details = yield ride_service_1.rideService.getRideDetails(req.params.id);
        return (0, responseHandler_1.successResponse)(res, 200, "details find successfully", details);
    }
    catch (error) {
        console.log(error);
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
});
exports.rideController = {
    getRideDetails,
    getUserRide,
    bookRide,
    createRider,
    getRider
};
