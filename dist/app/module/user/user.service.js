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
exports.userService = void 0;
const user_model_1 = __importDefault(require("./user.model"));
const createAccount = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const UserExist = yield user_model_1.default.findOne({ email: payload.email });
        if (UserExist) {
            return { message: "user already exist" };
        }
        const createUser = yield user_model_1.default.create(payload);
        return createUser;
    }
    catch (error) {
        console.log(error);
        return error;
    }
});
const login = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findUser = yield user_model_1.default.findOne({ email: payload.email });
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
});
exports.userService = {
    createAccount,
    login
};
