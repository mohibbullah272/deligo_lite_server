
import { Request, Response } from "express";
import { orderService } from "./orders.service";
import { errorResponse, successResponse } from "../../../utils/responseHandler";

 const createOrder = async (req: Request, res: Response) => {
  try {
    const order = await orderService.createOrderService(req.body);
return successResponse(res,201,"order created",order)
  } catch (error: any) {
return errorResponse(res,500,error.message,error)
  }
};

 const getOrderById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const order = await orderService.getOrderByIdService(id);

    if (!order) {
      return errorResponse(res,404,"order not found")
    }

return successResponse(res,200,"order found successfully",order)
  } catch (error: any) {
    return errorResponse(res,500,error.message,error)
  }
};
  const getUserOrder = async(req:Request,res:Response)=>{
    try {
      const order = await orderService.getUserAllOrder(req.params.email)
      return successResponse(res,200,"order found successfully",order)
    } catch (error:any) {
      return errorResponse(res,500,error.message,error)
    }
  }

export const orderController ={
    createOrder,
    getOrderById,
    getUserOrder
}