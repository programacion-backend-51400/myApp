import fs from 'fs'

export default class Pizza {

    constructor(filename = './db.json') {
        this.filename = filename
    }

    get = async() => {
        if(fs.existsSync(this.filename)) {
            const data = fs.readFileSync(this.filename, 'utf-8')
            return JSON.parse(data)
        }

        return []
    }
    getByID = async(id) => {
        const data = await this.get()
        
        return data.find(d => d.id === id) ?? {}
    }
    create = async(pizza) => {
        const list = await this.get()
        pizza.id = list.length + 1

        list.push(pizza)

        fs.writeFileSync(this.filename, JSON.stringify(list))
        return list
    }
    update = async(id, pizza) => {
        const list = await this.get()
        const idx = list.findIndex(d => d.id === id)
        if(!idx) return {}

        list[idx] = pizza

        fs.writeFileSync(this.filename, JSON.stringify(list))
        return pizza
    }
    remove = async(id) => {
        const list = await this.get()
        const idx = list.findIndex(d => d.id === id)
        if(!idx) return {}

        list.splice(idx, 1)
        fs.writeFileSync(this.filename, JSON.stringify(list))

        return {status: 'deleted'}
    }
}