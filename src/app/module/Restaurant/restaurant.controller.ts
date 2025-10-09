import { Request, Response } from "express";
import { restaurantService } from "./restaurant.service";


const addRestaurant = async(req:Request,res:Response)=>{
    try {
        const result = await restaurantService.addRestaurant(req.body)
        res.status(200).json({data:result,message:"restaurant added"})
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}
const getAllRestaurant = async(req:Request,res:Response)=>{
    try {
        const result = await restaurantService.getAllRestaurant()
        res.status(200).json({data:result,message:"data retrieved successfully"})
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

const getRestaurantDetails = async(req:Request,res:Response)=>{
    try {
        const result = await restaurantService.getSpecificRestaurant(Number(req.params.id))
        res.status(200).json({data:result,message:"data retrieved successfully"})
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}
const updateRestaurant = async(req:Request,res:Response)=>{
    try {
        const result = await restaurantService.updateRestaurant(req.body,Number(req.params.id))
        res.status(200).json({data:result,message:"data retrieved successfully"})
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

const deleteRestaurant =async(req:Request,res:Response)=>{
    try {
        const result = await restaurantService.deleteRestaurant(Number(req.params.id))
        res.status(200).json({data:result,message:"delete successful"})
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}
export const restaurantController={
    addRestaurant,
    getAllRestaurant,
    getRestaurantDetails,
    deleteRestaurant,
    updateRestaurant
}