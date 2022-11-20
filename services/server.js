const express = require('express')
const router = require('../routes/index.js')
const errorHandler = require('../middleware/ErrorHandlingMiddleware')

function createMyServer(){
    const app = express()
    app.use(express.json())
    app.use('/', router)
    app.use(errorHandler)

    return app
}

module.exports = createMyServer