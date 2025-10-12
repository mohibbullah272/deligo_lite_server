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
exports.restaurantController = void 0;
const restaurant_service_1 = require("./restaurant.service");
const responseHandler_1 = require("../../../utils/responseHandler");
const addRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield restaurant_service_1.restaurantService.addRestaurant(req.body);
        return (0, responseHandler_1.successResponse)(res, 200, "restaurant added", result);
    }
    catch (error) {
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
});
const getAllRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield restaurant_service_1.restaurantService.getAllRestaurant();
        return (0, responseHandler_1.successResponse)(res, 200, "data retrieved successfully", result);
    }
    catch (error) {
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
});
const getRestaurantDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield restaurant_service_1.restaurantService.getSpecificRestaurant(req.params.id);
        return (0, responseHandler_1.successResponse)(res, 200, "data retrieved successfully", result);
    }
    catch (error) {
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
});
const updateRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield restaurant_service_1.restaurantService.updateRestaurant(req.body, Number(req.params.id));
        return (0, responseHandler_1.successResponse)(res, 200, "data update successfully", result);
    }
    catch (error) {
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
});
const deleteRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield restaurant_service_1.restaurantService.deleteRestaurant(Number(req.params.id));
        return (0, responseHandler_1.successResponse)(res, 204, "data update successfully", result);
    }
    catch (error) {
        return (0, responseHandler_1.errorResponse)(res, 400, error.message, error);
    }
});
exports.restaurantController = {
    addRestaurant,
    getAllRestaurant,
    getRestaurantDetails,
    deleteRestaurant,
    updateRestaurant
};
