import { Router } from "express";
import { orderController } from "./orders.controller";






const router = Router()

router.post('/',orderController.createOrder)
router.get('/:id',orderController.getOrderById)
router.get('/user-order/:email',orderController.getUserOrder)
export const orderRouter = router