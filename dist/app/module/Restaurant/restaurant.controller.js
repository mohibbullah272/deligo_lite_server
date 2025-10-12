"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantController = void 0;
const restaurant_service_1 = require("./restaurant.service");
const responseHandler_1 = require("../../../utils/responseHandler");
const addRestaurant = async (req, res) => {
    try {
        const result = await restaurant_service_1.restaurantService.addRestaurant(req.body);
        return (0, responseHandler_1.successResponse)(res, 200, "restaurant added", result);
    }
    catch (error) {
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
};
const getAllRestaurant = async (req, res) => {
    try {
        const result = await restaurant_service_1.restaurantService.getAllRestaurant();
        return (0, responseHandler_1.successResponse)(res, 200, "data retrieved successfully", result);
    }
    catch (error) {
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
};
const getRestaurantDetails = async (req, res) => {
    try {
        const result = await restaurant_service_1.restaurantService.getSpecificRestaurant(req.params.id);
        return (0, responseHandler_1.successResponse)(res, 200, "data retrieved successfully", result);
    }
    catch (error) {
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
};
const updateRestaurant = async (req, res) => {
    try {
        const result = await restaurant_service_1.restaurantService.updateRestaurant(req.body, Number(req.params.id));
        return (0, responseHandler_1.successResponse)(res, 200, "data update successfully", result);
    }
    catch (error) {
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
};
const deleteRestaurant = async (req, res) => {
    try {
        const result = await restaurant_service_1.restaurantService.deleteRestaurant(Number(req.params.id));
        return (0, responseHandler_1.successResponse)(res, 204, "data update successfully", result);
    }
    catch (error) {
        return (0, responseHandler_1.errorResponse)(res, 400, error.message, error);
    }
};
exports.restaurantController = {
    addRestaurant,
    getAllRestaurant,
    getRestaurantDetails,
    deleteRestaurant,
    updateRestaurant
};
