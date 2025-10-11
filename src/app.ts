import { Application, Request, Response } from "express";
import express from 'express';
import cors from 'cors'
import globalErrorHandler from "./app/middlewares/error";
import { userRouter } from "./app/module/user/user.route";
import { rideRouter } from "./app/module/Ride/ride.route";
import { restaurantRouter } from "./app/module/Restaurant/restaurant.route";
import { orderRouter } from "./app/module/orders/orders.route";





const app:Application = express()

app.use(cors())
app.use(express.json())

app.use('/auth',userRouter)
app.use('/rides',rideRouter)
app.use('/orders',orderRouter)
app.use('/restaurants',restaurantRouter)

app.get("/healthz", (req:Request,res:Response) => {
    res.send("ok");
  });
  
app.get('/',async(req:Request,res:Response)=>{
    res.send(`welcome to Deligo Lite`)
})


app.use(globalErrorHandler);



export default app



