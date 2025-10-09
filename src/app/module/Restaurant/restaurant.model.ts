import { model, Schema } from "mongoose";
import { IRestaurant } from "../../types/types";



const restaurantSchema = new Schema<IRestaurant>({
        name: String,
        cuisineType: String,
        image: String,
        deliveryTime: String,
        menu: [
          { name: String, price: Number, image: String }
        ]
      
},
{
    collection:"Restaurants",
    versionKey:false,
    timestamps:true
}
)


export const Restaurant = model<IRestaurant>("Restaurant",restaurantSchema)