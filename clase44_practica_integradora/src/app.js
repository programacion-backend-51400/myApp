import express from 'express'
import pizzaRouter from './routes/pizza.router.js'
import config from './config/config.js'
import __dirname from './utils.js'

const app = express()
app.use('/public', express.static(__dirname + '/public'))
app.use(express.json())

app.use('/api/pizza', pizzaRouter)
app.use('/', (req, res) => res.json('ok'))

app.listen(config.appPort, () => console.log('Listening... 🏃.. '))