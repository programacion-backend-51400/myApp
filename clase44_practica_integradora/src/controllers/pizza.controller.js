import PizzaService from "../services/pizza.services.js";
const pizzaService = new PizzaService()

export const getPizzas = async(req, res) => {
    return res.json(await pizzaService.get())
}

export const getPizzaByID = async(req, res) => {
    const { id } = req.params
    return res.json(await pizzaService.getByID(id))
}

export const createPizza = async(req, res) => {
    const object = req.body
    const file = req?.file || {}
    
    object.image = file ? `/public/${file.filename}` : ''
    return res.json(await pizzaService.create(object))
}

export const updatePizza = async(req, res) => {
    const { id } = req.params
    const object = req.body
    return res.json(await pizzaService.update(id, object))
}

export const removePizza = async(req, res) => {
    const { id } = req.params
    return res.json(await pizzaService.remove(id))
}