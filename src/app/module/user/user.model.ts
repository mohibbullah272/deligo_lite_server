import {  model, Schema } from "mongoose";
import { IUser } from "../../types/types";


const UserSchema = new Schema<IUser>({
email:{type:String , required:true, trim:true,unique:true},
name:{type:String,required:true,trim:true},
password:{type:String,required:true,trim:true},
role: {
    type:String,
    default:"User"
}


},
{
    collection:"User",
    versionKey:false,
    timestamps:true
})

const User = model<IUser>("User", UserSchema)

export default User