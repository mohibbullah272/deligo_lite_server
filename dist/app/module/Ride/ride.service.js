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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rideService = void 0;
const appError_1 = __importDefault(require("../../middlewares/appError"));
const ride_model_1 = require("./ride.model");
const addRiders = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield ride_model_1.Rider.create(payload);
        return result;
    }
    catch (error) {
        throw new appError_1.default("something went wrong", 500);
    }
});
const getRiders = (vehicleType) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield ride_model_1.Rider.find({ vehicleType });
        return result;
    }
    catch (error) {
        throw new appError_1.default("something went wrong", 500);
    }
});
const bookRides = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield ride_model_1.Ride.create(payload);
        return result;
    }
    catch (error) {
        console.log(error);
        return error;
    }
});
const getUserRide = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield ride_model_1.Ride.find({ userEmail: email });
        if (!result) {
            throw new appError_1.default('rides not found', 404);
        }
        return result;
    }
    catch (error) {
        console.log(error);
        return error;
    }
});
const getRideDetails = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rideDetails = yield ride_model_1.Ride.findById(id);
        if (!rideDetails) {
            throw new appError_1.default('ride details not found', 404);
        }
        return rideDetails;
    }
    catch (error) {
        console.log(error);
        return error;
    }
});
exports.rideService = {
    addRiders,
    bookRides,
    getUserRide,
    getRideDetails,
    getRiders
};
