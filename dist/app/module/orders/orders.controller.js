"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const orders_service_1 = require("./orders.service");
const responseHandler_1 = require("../../../utils/responseHandler");
const createOrder = async (req, res) => {
    try {
        const order = await orders_service_1.orderService.createOrderService(req.body);
        return (0, responseHandler_1.successResponse)(res, 201, "order created", order);
    }
    catch (error) {
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
};
const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await orders_service_1.orderService.getOrderByIdService(id);
        if (!order) {
            return (0, responseHandler_1.errorResponse)(res, 404, "order not found");
        }
        return (0, responseHandler_1.successResponse)(res, 200, "order found successfully", order);
    }
    catch (error) {
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
};
const getUserOrder = async (req, res) => {
    try {
        const order = await orders_service_1.orderService.getUserAllOrder(req.params.email);
        return (0, responseHandler_1.successResponse)(res, 200, "order found successfully", order);
    }
    catch (error) {
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
};
exports.orderController = {
    createOrder,
    getOrderById,
    getUserOrder
};
