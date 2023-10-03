import { Pizza } from "../DAO/factory.js"

const dao = new Pizza()

export default class PizzaService {

    get = async() => {
        return await dao.get()
    }

    getByID = async(id) => {
        return await dao.getByID(id)
    }

    create = async (object) => {
        try {
            if(!object.name) throw 'Must get a name'
            return await dao.create(object)
        } catch (error) {
            return {}
        }
    }

    update = async(id, object) => {
        return await dao.update(id, object)
    }

    remove = async(id) => {
        return await dao.remove(id)
    }

}