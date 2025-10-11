import { IUser } from "../../types/types"
import User from "./user.model"





const createAccount = async(payload:IUser)=>{
try {
    const UserExist = await User.findOne({email:payload.email})
    if(UserExist){
        return {  message:"user already exist"}
    }
    const createUser = await User.create(payload)
    return createUser

} catch (error) {
    console.log(error)
    return error
}
}


const login = async(payload:
   {
        email:string,
        password:string
    }
)=>{
try {
    const findUser = await User.findOne({email:payload.email})
    if(!findUser){
        return {message:"user not found"}
    }
    if(findUser.password === payload.password){

        return findUser
    }
    return "unauthorized action"
} catch (error) {
    console.log(error)
    return error
}
}

export const userService ={
    createAccount,
    login
}