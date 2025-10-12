"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = void 0;
const orders_model_1 = require("./orders.model");
const createOrderService = async (orderData) => {
    const order = new orders_model_1.Order(orderData);
    return await order.save();
};
const getOrderByIdService = async (id) => {
    return await orders_model_1.Order.findById(id);
};
const getUserAllOrder = async (email) => {
    const order = await orders_model_1.Order.find({ customerEmail: email });
    return order;
};
exports.orderService = {
    createOrderService,
    getOrderByIdService,
    getUserAllOrder
};
