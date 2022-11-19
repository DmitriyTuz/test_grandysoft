require('dotenv').config()

const sequelize = require('./db')
const http = require("http")

const createMyServer = require('./utils/server')
const app = createMyServer()
module.exports = app

const server = http.createServer(app)
const PORT = process.env.PORT || 3001

const start = async () => {
    try {
       // await sequelize.authenticate()
       // await sequelize.sync()

            server.listen(PORT, () => console.log(`Server started on port ${PORT}`))

    } catch (e) {
        console.log(e)
    }
}

start()