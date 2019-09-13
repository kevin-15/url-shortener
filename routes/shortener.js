const Router = require('express-promise-router')
const db = require('../config')
const router = new Router()
module.exports = router

router.get('/', async (req, res) => {
	const { rows } = await db.query('SELECT * FROM shortener')
	res.send(rows[0])
})