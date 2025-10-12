"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const error_1 = __importDefault(require("./app/middlewares/error"));
const user_route_1 = require("./app/module/user/user.route");
const ride_route_1 = require("./app/module/Ride/ride.route");
const restaurant_route_1 = require("./app/module/Restaurant/restaurant.route");
const orders_route_1 = require("./app/module/orders/orders.route");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/auth', user_route_1.userRouter);
app.use('/rides', ride_route_1.rideRouter);
app.use('/orders', orders_route_1.orderRouter);
app.use('/restaurants', restaurant_route_1.restaurantRouter);
app.get("/healthz", (req, res) => {
    res.send("ok");
});
app.get('/', async (req, res) => {
    res.send(`welcome to Deligo Lite`);
});
app.use(error_1.default);
exports.default = app;
