import { Router } from "express";
import { userController } from "./user.controller";


const router = Router()

router.post('/signup',userController.createAccount)
router.post('/login',userController.login)

export const userRouter = router