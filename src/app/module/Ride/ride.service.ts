import AppError from "../../middlewares/appError";
import { IRide, IRider } from "../../types/types";
import { Ride, Rider } from "./ride.model";


const addRiders = async(payload:IRider)=>{
    try {
        const result = await Rider.create(payload)
        return result
    } catch (error) {
throw new AppError("something went wrong",500,)
    }
}

const getRiders = async(vehicleType:string)=>{
    try {
        const result = await Rider.find({vehicleType})
        return result
    } catch (error) {
        throw new AppError("something went wrong",500,)
    }
}

const bookRides = async(payload:IRide)=>{
try {
    const result = await Ride.create(payload)
    return result
} catch (error) {
    console.log(error)
    return error

}
}
const getUserRide = async(email:string)=>{
try {
    const result =  await Ride.findOne({userEmail:email})
    if(!result){
        throw new AppError('rides not found',404)
    }
    return result
} catch (error) {
    console.log(error)
    return error
}
}
const getRideDetails =async(id:number)=>{
 try {
    const rideDetails = await Ride.findOne({_id:id})
    if(!rideDetails){
        throw new AppError('ride details not found',404)
    }
    return rideDetails
 } catch (error) {
    console.log(error)
    return error
 }
}

export const rideService = {
    addRiders,
    bookRides,
    getUserRide,
    getRideDetails,
 getRiders 

}