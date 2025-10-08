export interface IUser {
    email:string;
    password:string;
    name:string;
    role : "User" | "Admin"
}
export interface IRide {
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
    vehicleType: string;
    driverName: string;
    fare: number;
    estimatedArrival: string;

}
export interface IOrder {
    customerName: string;
    restaurantId: string;
    items: [{ name: string; price: number }];
    totalAmount: number;
    estimatedDelivery: string;
  
}

export interface IRestaurant {
    name: string;
    cuisineType: string;
    image: string;
    deliveryTime: string;
    menu: [
      { name: string; price: number; image: string }
    ]
  
}