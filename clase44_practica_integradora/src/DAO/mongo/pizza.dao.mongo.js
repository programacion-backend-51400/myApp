import PizzaModel from "./models/pizza.model.js";

export default class Pizza {
    get = async() => {
        return await PizzaModel.find()
    }
    getByID = async(id) => {
        return await PizzaModel.findById(id)
    }
    create = async(pizza) => {
        return await PizzaModel.create(pizza)
    }
    update = async(id, pizza) => {
        return await PizzaModel.updateOne({_id: id}, { $set: pizza})
    }
    remove = async(id) => {
        return await PizzaModel.deleteOne({_id: id})
    }
}