import { IOrder } from "../../types/types";
import { Order } from "./orders.model";


const createOrderService = async (orderData: IOrder) => {
    const order = new Order(orderData);
    return await order.save();
  };

const getOrderByIdService = async (id: string) => {
    return await Order.findById(id)
  };
const getUserAllOrder = async(email:string)=>{
  const order = await Order.find({customerEmail:email})
  return order
}
  export const orderService={
    createOrderService,
    getOrderByIdService,
    getUserAllOrder

  }