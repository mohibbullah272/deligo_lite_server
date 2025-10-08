import { Request, Response } from "express";
import { rideService } from "./ride.service";

const createRider = async(req:Request,res:Response)=>{
    try {
        const uploadRider = await rideService.addRiders(req.body)
        
        return res.status(200).json({data:uploadRider,message:"rider created"})
    } catch (error) {
        console.log(error)
        return res.send(error)
    }
}
const bookRide = async(req:Request,res:Response)=>{
    try {
        const booking = await rideService.bookRides(req.body)
        return res.status(200).json({data:booking,message:"booking success"})
    } catch (error) {
        console.log(error)
        return  res.send(error)
    }
}

const getUserRide = async(req:Request,res:Response)=>{
try {
    const rides = await rideService.getUserRide(req.params.email)
    return res.status(200).json({data:rides,message:"rides find successful"})
} catch (error) {
    console.log(error)
    return  res.send(error)
}
}

const getRideDetails = async(req:Request,res:Response)=>{
try {
    const details = await rideService.getRideDetails(Number(req.params.id))
    return res.status(200).json({data:details,message:"details found success"})
} catch (error) {
    console.log(error)
    return  res.send(error)
}
}

export const rideController ={
    getRideDetails,
    getUserRide,
    bookRide,
    createRider
}