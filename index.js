require('dotenv').config(
    {
        path: `${__dirname}/env/.env.${process.env.node_env}`
    }
);

//INCLUDES
const express = require('express')

const app = express()

//ROUTERS
const mainRouter = require('./modules/mainModule/mainRouter')

//APP CONFIG
app.use(express.json())
app.use(express.urlencoded())

//ПУТИ РОУТОВ
app.use('/main', mainRouter)

const start = async () => {
    try{
        app.listen(process.env.SERVER_PORT, () => console.log(`authService cлушает порт ${process.env.SERVER_PORT}...`))
    } catch(e){
        console.log(e)
    }
}

start()