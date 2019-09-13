const Router = require('express-promise-router')
const db = require('../config')
const router = new Router()
module.exports = router

router.get('/', async (req, res) => {
	res.send('Hello World!');
})