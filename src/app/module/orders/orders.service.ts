import { IOrder } from "../../types/types";
import { Order } from "./orders.model";


const createOrderService = async (orderData: IOrder) => {
    const order = new Order(orderData);
    return await order.save();
  };

const getOrderByIdService = async (id: string) => {
    return await Order.findById(id)
  };

  export const orderService={
    createOrderService,
    getOrderByIdService

  }