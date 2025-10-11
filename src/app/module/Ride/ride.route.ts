import { Router } from "express";
import { rideController } from "./ride.controller";

const router = Router()

router.post('/',rideController.bookRide)
router.get('/:vehicleType',rideController.getRider)
router.get('/:id',rideController.getRideDetails)
router.get('/:email',rideController.getUserRide)
router.post('/rider',rideController.createRider)

export const rideRouter = router
