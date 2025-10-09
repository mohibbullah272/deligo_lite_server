import { Request, Response } from "express";
import { rideService } from "./ride.service";
import { errorResponse, successResponse } from "../../../utils/responseHandler";

const createRider = async(req:Request,res:Response)=>{
    try {
        const uploadRider = await rideService.addRiders(req.body)
        
        return successResponse(res,200,"rider created",uploadRider)
    } catch (error:any) {
        console.log(error)
        return errorResponse(res,500,error.message,error)
    }
}
const bookRide = async(req:Request,res:Response)=>{
    try {
        const booking = await rideService.bookRides(req.body)
        return successResponse(res,200,"booking success",booking)
    } catch (error:any) {
        console.log(error)
        return errorResponse(res,500,error.message,error)
    }
}

const getUserRide = async(req:Request,res:Response)=>{
try {
    const rides = await rideService.getUserRide(req.params.email)
    return successResponse(res,200,"rides find successfully",rides)
} catch (error:any) {
    console.log(error)
    return errorResponse(res,500,error.message,error)
}
}

const getRideDetails = async(req:Request,res:Response)=>{
try {
    const details = await rideService.getRideDetails(Number(req.params.id))
    return successResponse(res,200,"details find successfully",details)
} catch (error:any) {
    console.log(error)
    return errorResponse(res,500,error.message,error)
}
}

export const rideController ={
    getRideDetails,
    getUserRide,
    bookRide,
    createRider
}