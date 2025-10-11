import { Request, Response } from "express";
import { restaurantService } from "./restaurant.service";
import { errorResponse, successResponse } from "../../../utils/responseHandler";


const addRestaurant = async(req:Request,res:Response)=>{
    try {
        const result = await restaurantService.addRestaurant(req.body)
       return successResponse(res,200,"restaurant added",result)
    } catch (error:any) {
        console.log(error)
      return errorResponse(res,500,error.message,error)
    }
}
const getAllRestaurant = async(req:Request,res:Response)=>{
    try {
        const result = await restaurantService.getAllRestaurant()
    return successResponse(res,200,"data retrieved successfully",result)
    } catch (error:any) {
        console.log(error)
        return errorResponse(res,500,error.message,error)
    }
}

const getRestaurantDetails = async(req:Request,res:Response)=>{
    try {
        const result = await restaurantService.getSpecificRestaurant(req.params.id)
     return successResponse(res,200,"data retrieved successfully",result)
    } catch (error:any) {
        console.log(error)
        return errorResponse(res,500,error.message,error)
    }
}
const updateRestaurant = async(req:Request,res:Response)=>{
    try {
        const result = await restaurantService.updateRestaurant(req.body,Number(req.params.id))
       return successResponse(res,200,"data update successfully",result)
    } catch (error:any) {
        console.log(error)
        return errorResponse(res,500,error.message,error)
    }
}

const deleteRestaurant =async(req:Request,res:Response)=>{
    try {
        const result = await restaurantService.deleteRestaurant(Number(req.params.id))
        return successResponse(res,204,"data update successfully",result)
    } catch (error:any) {
        console.log(error)
        return errorResponse(res,400,error.message,error)
    }
}
export const restaurantController={
    addRestaurant,
    getAllRestaurant,
    getRestaurantDetails,
    deleteRestaurant,
    updateRestaurant
}