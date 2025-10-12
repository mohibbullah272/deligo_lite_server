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
exports.restaurantService = void 0;
const appError_1 = __importDefault(require("../../middlewares/appError"));
const restaurant_model_1 = require("./restaurant.model");
const getAllRestaurant = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getRestaurant = yield restaurant_model_1.Restaurant.find();
        return getRestaurant;
    }
    catch (error) {
        return error;
    }
});
const getSpecificRestaurant = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getRestaurant = yield restaurant_model_1.Restaurant.findById(id);
        if (!getRestaurant) {
            throw new appError_1.default("no data found", 404);
        }
        return getRestaurant;
    }
    catch (error) {
        return error;
    }
});
const addRestaurant = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (!payload) {
        throw new appError_1.default("no data found", 404);
    }
    const result = yield restaurant_model_1.Restaurant.create(payload);
    return result;
});
const updateRestaurant = (payload, _id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!payload) {
            throw new appError_1.default("no data found", 404);
        }
        const update = yield restaurant_model_1.Restaurant.findOne({ _id }).updateOne(payload);
        return update;
    }
    catch (error) {
        console.log(error);
        return error;
    }
});
const deleteRestaurant = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!_id) {
            throw new appError_1.default("id is required", 404);
        }
        const result = yield restaurant_model_1.Restaurant.deleteOne({ _id });
        return result;
    }
    catch (error) {
        console.log(error);
        return error;
    }
});
exports.restaurantService = {
    addRestaurant,
    getAllRestaurant,
    getSpecificRestaurant,
    updateRestaurant,
    deleteRestaurant
};
