const express = require('express')
const Router = require('express-promise-router')
const port = 3000
const mountRoutes = require('./routes')
const app = express()
mountRoutes(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
