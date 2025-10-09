import { Types } from "mongoose";

export interface IUser {
    email:string;
    password:string;
    name:string;
    role : "User" | "Admin"
}
export interface IRide {
    _id?:Types.ObjectId;
    customerName: string;
    userEmail:string;
    pickup: string;
    destination: string;
    vehicleType: string;
    driverName: string;
    fare: number;
    estimatedArrival: string;
}

export interface IRider {
    _id?:Types.ObjectId;
    vehicleType: string;
    driverName: string;
    fare: number;
    estimatedArrival: string;

}
export interface IOrder {
    _id?:Types.ObjectId;
    customerName: string;
    restaurantId: Types.ObjectId;
    items: [{ name: string; price: number }];
    totalAmount: number;
    estimatedDelivery: string;
  
}

export interface IRestaurant {
    _id?:Types.ObjectId;
    name: string;
    cuisineType: string;
    image: string;
    deliveryTime: string;
    menu: [
      { name: string; price: number; image: string }
    ]
  
}