const path = require('path');
const Router = require('express-promise-router')
const router = new Router()
module.exports = router



router.get('/', async (req, res) => {
	res.sendFile(path.join(__dirname + '/../static/index.html'));
})
