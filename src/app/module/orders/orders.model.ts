import { model, Schema } from "mongoose";
import { IOrder } from "../../types/types";




const orderSchema = new Schema<IOrder>({
    customerName: String,
    customerEmail:String,
    restaurantId: {
        type: Schema.Types.ObjectId, 
        ref: "Restaurant",    
        required: true,
      },
    items: [{ name: String, price: Number,quantity:Number }],
    totalAmount: Number,
    estimatedDelivery: String,
  
  
},{
    collection:"orders",
    versionKey:false,
    timestamps:true
})


export const Order = model<IOrder>("Order",orderSchema)