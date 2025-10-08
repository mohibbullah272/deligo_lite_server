import { Request, Response } from "express";
import { userService } from "./user.service";



const createAccount = async(req:Request,res:Response)=>{
    try {
        const result = await userService.createAccount(req.body)
        return res.status(200).json({message:"account created",data:result})

    } catch (error) {
        console.log(error)
        return res.send(error)
    }
}


const login =async(req:Request,res:Response)=>{
    try {
        const result = await userService.login(req.body)
        return res.status(200).json({message:"login success",data:result})

    } catch (error) {
        console.log(error)
        return res.send(error)
    }

}

export const userController ={
    createAccount,
    login
}