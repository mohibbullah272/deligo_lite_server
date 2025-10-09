import AppError from "../../middlewares/appError";
import { IRestaurant } from "../../types/types";
import { Restaurant } from "./restaurant.model";



const getAllRestaurant = async()=>{
    try {
        const getRestaurant = await Restaurant.find()
        return getRestaurant
    } catch (error) {
        console.log(error)
        return error
    }
}

const getSpecificRestaurant = async(id:number)=>{
    try {
        const getRestaurant = await Restaurant.findOne({_id:id})
        if(!getRestaurant){
            throw new AppError("no data found",404)
        }
    } catch (error) {
        console.log(error)
        return error
    }
}
const addRestaurant = async(payload:IRestaurant)=>{
    if(!payload){
        throw new AppError("no data found",404)
    }
    const result = await Restaurant.create(payload)
    return result
   
}
const updateRestaurant = async(payload:Partial<IRestaurant>,_id:number)=>{
    try {
        if(!payload){
            throw new AppError("no data found",404)
        }
        const update = await Restaurant.findOne({_id}).updateOne(payload)
        return update
    } catch (error) {
        console.log(error)
        return error
    }
}
const deleteRestaurant= async(_id:number)=>{
    try {
        if(!_id){
            throw new AppError("id is required",404)
        }
        const result = await Restaurant.deleteOne({_id})
        return result
    } catch (error) {
        console.log(error)
        return error
    }
}
export const restaurantService={
    addRestaurant,
    getAllRestaurant,
    getSpecificRestaurant,
    updateRestaurant,
    deleteRestaurant
}