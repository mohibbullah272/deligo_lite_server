import { Router } from "express";
import { orderController } from "./orders.controller";






const router = Router()

router.post('/',orderController.createOrder)
router.get('/:id',orderController.getOrderById)
router.get('/:email',orderController.getUserOrder)
export const orderRouter = router