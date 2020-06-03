const path = require('path')
const mongo = require('./src/helpers/mongo')
require('dotenv').config({ path: `${path.dirname(__dirname)}/api/.env`})
const { PORT = 3001, NODE_ENV= 'development' } = process.env
const app = require('./app')

process.on('SIGTERM', () => {
    if(mongo.isConnected()){
        mongo.destroy()
    }
    console.log('API went down [SIGTERM]')
})

process.on('SIGINT', () => {
    if(mongo.isConnected()){
        mongo.destroy()
    }
    console.log('API went down [SIGINT]')
})

process.on('message', (message) => {
    if(message==='SHUTDOWN'){

        if(mongo.isConnected()){
            mongo.destroy()
        }
        console.log('API went down [SHUTDOWN]')
    }
})


app.listen(PORT, () => {
    mongo.connect()
    console.log(`Listening on port ${PORT} running ${NODE_ENV} environment`)
})
