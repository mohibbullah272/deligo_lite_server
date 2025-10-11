import { Request, Response } from "express";
import { userService } from "./user.service";
import { errorResponse, successResponse } from "../../../utils/responseHandler";



const createAccount = async(req:Request,res:Response)=>{
    try {
        const result = await userService.createAccount(req.body)
        return successResponse(res,200,"account created",result)

    } catch (error:any) {
        console.log(error)
        return errorResponse(res,500,error.message,error)
    }
}


const login =async(req:Request,res:Response)=>{
    try {
        const result = await userService.login(req.body)
        console.log(result)
        return successResponse(res,200,"login success",result)

    } catch (error:any) {
        console.log(error)
        return errorResponse(res,500,error.message,error)
    }

}

export const userController ={
    createAccount,
    login
}