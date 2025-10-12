"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.successResponse = void 0;
const successResponse = (res, statusCode, message, data) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data: data || null,
    });
};
exports.successResponse = successResponse;
const errorResponse = (res, statusCode, message, error) => {
    return res.status(statusCode).json({
        success: false,
        message,
        error: (error === null || error === void 0 ? void 0 : error.message) || error || null,
    });
};
exports.errorResponse = errorResponse;
