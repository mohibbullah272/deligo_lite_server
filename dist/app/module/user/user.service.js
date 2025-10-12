"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const user_model_1 = __importDefault(require("./user.model"));
const createAccount = async (payload) => {
    try {
        const UserExist = await user_model_1.default.findOne({ email: payload.email });
        if (UserExist) {
            return { message: "user already exist" };
        }
        const createUser = await user_model_1.default.create(payload);
        return createUser;
    }
    catch (error) {
        console.log(error);
        return error;
    }
};
const login = async (payload) => {
    try {
        const findUser = await user_model_1.default.findOne({ email: payload.email });
        if (!findUser) {
            return { message: "user not found" };
        }
        if (findUser.password === payload.password) {
            return findUser;
        }
        return "unauthorized action";
    }
    catch (error) {
        console.log(error);
        return error;
    }
};
exports.userService = {
    createAccount,
    login
};
