import { Router } from "express";
import uploader from "../lib/uploader.js";
import { getPizzas, getPizzaByID, createPizza, updatePizza, removePizza } from '../controllers/pizza.controller.js'

const router = Router()

router.get('/', getPizzas)
router.get('/:id', getPizzaByID)
router.post('/', createPizza)
router.post('/withimage', uploader.single('image'), createPizza)
router.put('/:id', updatePizza)
router.delete('/:id', removePizza)

export default router

