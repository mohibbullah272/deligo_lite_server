import { Router } from "express";
import { restaurantController } from "./restaurant.controller";





const router = Router()

router.post('/add',restaurantController.addRestaurant)
router.get('/',restaurantController.getAllRestaurant)
router.get('/:id',restaurantController.getRestaurantDetails)
router.patch('/:id',restaurantController.updateRestaurant)
router.delete('/',restaurantController.deleteRestaurant)

export const restaurantRouter = router