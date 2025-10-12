"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantService = void 0;
const appError_1 = __importDefault(require("../../middlewares/appError"));
const restaurant_model_1 = require("./restaurant.model");
const getAllRestaurant = async () => {
    try {
        const getRestaurant = await restaurant_model_1.Restaurant.find();
        return getRestaurant;
    }
    catch (error) {
        return error;
    }
};
const getSpecificRestaurant = async (id) => {
    try {
        const getRestaurant = await restaurant_model_1.Restaurant.findById(id);
        if (!getRestaurant) {
            throw new appError_1.default("no data found", 404);
        }
        return getRestaurant;
    }
    catch (error) {
        return error;
    }
};
const addRestaurant = async (payload) => {
    if (!payload) {
        throw new appError_1.default("no data found", 404);
    }
    const result = await restaurant_model_1.Restaurant.create(payload);
    return result;
};
const updateRestaurant = async (payload, _id) => {
    try {
        if (!payload) {
            throw new appError_1.default("no data found", 404);
        }
        const update = await restaurant_model_1.Restaurant.findOne({ _id }).updateOne(payload);
        return update;
    }
    catch (error) {
        console.log(error);
        return error;
    }
};
const deleteRestaurant = async (_id) => {
    try {
        if (!_id) {
            throw new appError_1.default("id is required", 404);
        }
        const result = await restaurant_model_1.Restaurant.deleteOne({ _id });
        return result;
    }
    catch (error) {
        console.log(error);
        return error;
    }
};
exports.restaurantService = {
    addRestaurant,
    getAllRestaurant,
    getSpecificRestaurant,
    updateRestaurant,
    deleteRestaurant
};
