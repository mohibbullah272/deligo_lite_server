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
exports.orderController = void 0;
const orders_service_1 = require("./orders.service");
const responseHandler_1 = require("../../../utils/responseHandler");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield orders_service_1.orderService.createOrderService(req.body);
        return (0, responseHandler_1.successResponse)(res, 201, "order created", order);
    }
    catch (error) {
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
});
const getOrderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const order = yield orders_service_1.orderService.getOrderByIdService(id);
        if (!order) {
            return (0, responseHandler_1.errorResponse)(res, 404, "order not found");
        }
        return (0, responseHandler_1.successResponse)(res, 200, "order found successfully", order);
    }
    catch (error) {
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
});
const getUserOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield orders_service_1.orderService.getUserAllOrder(req.params.email);
        return (0, responseHandler_1.successResponse)(res, 200, "order found successfully", order);
    }
    catch (error) {
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
});
exports.orderController = {
    createOrder,
    getOrderById,
    getUserOrder
};
