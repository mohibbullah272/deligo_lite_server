"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("./user.service");
const responseHandler_1 = require("../../../utils/responseHandler");
const createAccount = async (req, res) => {
    try {
        const result = await user_service_1.userService.createAccount(req.body);
        return (0, responseHandler_1.successResponse)(res, 200, "account created", result);
    }
    catch (error) {
        console.log(error);
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
};
const login = async (req, res) => {
    try {
        const result = await user_service_1.userService.login(req.body);
        return (0, responseHandler_1.successResponse)(res, 200, "login success", result);
    }
    catch (error) {
        console.log(error);
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
};
exports.userController = {
    createAccount,
    login
};
