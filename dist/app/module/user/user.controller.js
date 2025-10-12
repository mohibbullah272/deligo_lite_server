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
exports.userController = void 0;
const user_service_1 = require("./user.service");
const responseHandler_1 = require("../../../utils/responseHandler");
const createAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.userService.createAccount(req.body);
        return (0, responseHandler_1.successResponse)(res, 200, "account created", result);
    }
    catch (error) {
        console.log(error);
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
});
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.userService.login(req.body);
        return (0, responseHandler_1.successResponse)(res, 200, "login success", result);
    }
    catch (error) {
        console.log(error);
        return (0, responseHandler_1.errorResponse)(res, 500, error.message, error);
    }
});
exports.userController = {
    createAccount,
    login
};
