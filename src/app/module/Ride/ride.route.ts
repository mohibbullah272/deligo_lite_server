import { Router } from "express";
import { rideController } from "./ride.controller";

const router = Router()

router.post('/',rideController.bookRide)
router.get('/user-ride/:email',rideController.getUserRide)
router.get('/rider/:vehicleType',rideController.getRider)
router.get('/:id',rideController.getRideDetails)
router.post('/rider',rideController.createRider)

export const rideRouter = router
