import { model, Schema } from "mongoose";
import { IRide, IRider } from "../../types/types";


const rideSchema = new Schema<IRide>({
    customerName: {type:String,trim:true},
    pickup: String,
    userEmail:String,
    destination: String,
    vehicleType: String,
    driverName: String,
    fare: Number,
    estimatedArrival: String,
  
},{
    versionKey:false,
    timestamps:true,
    collection:"rides"
})

const riderSchema = new Schema<IRider>({
    vehicleType:String,
    driverName:String,
    fare: Number,
    estimatedArrival: String,
})

export  const Ride = model<IRide>("Ride",rideSchema)
export const Rider = model<IRider>("Rider",riderSchema)