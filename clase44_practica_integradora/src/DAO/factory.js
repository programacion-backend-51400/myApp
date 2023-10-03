import config from "../config/config.js";
import mongoose from "mongoose";

export let Pizza

console.log(`Persistence with ${config.persistence}`);

switch (config.persistence) {
    case 'MONGO':   

        const dbName = config.databaseName
        mongoose.connect(config.databaseURI, { dbName })
            .then(() => console.log('DB connected! 😎'))
            .catch(e => { throw 'DB can not connected! 🚑' })

        const { default: PizzaMongo } = await import('./mongo/pizza.dao.mongo.js')
        Pizza = PizzaMongo

        break;

    case 'FILE':

        const { default: PizzaFile } = await import('./file/pizza.dao.file.js')
        Pizza = PizzaFile

        break;

    default:
        throw 'Persistence is undefined'
}