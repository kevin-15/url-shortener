const express = require('express')
const Router = require('express-promise-router')
var bodyParser = require('body-parser')

const port = 3000
const mountRoutes = require('./routes')
const app = express()

app.use(bodyParser.json())

mountRoutes(app)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
