"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    email: { type: String, required: true, trim: true, unique: true },
    name: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    role: {
        type: String,
        default: "User"
    }
}, {
    collection: "User",
    versionKey: false,
    timestamps: true
});
const User = (0, mongoose_1.model)("User", UserSchema);
exports.default = User;
