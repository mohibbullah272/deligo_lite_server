import { Request, Response } from "express";
import { userService } from "./user.service";


const createAccount = async(req:Request,res:Response)=>{
    try {
        const result = await userService.createAccount(req.body)
        return result

    } catch (error) {
        console.log(error)
        return error
    }
}


const login =async(req:Request,res:Response)=>{
    try {
        const result = await userService.login(req.body)
        return result

    } catch (error) {
        console.log(error)
        return error
    }

}

export const userController ={
    createAccount,
    login
}