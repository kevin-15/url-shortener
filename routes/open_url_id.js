const Router = require('express-promise-router')
const validUrl = require('valid-url');
const shortid = require('shortid');

const router = new Router()
module.exports = router

const db = require('../sql/sql');

router.get('/:url_id', async (req, res) => {
	let obj = { url_id: req.params.url_id };

	db.checkUrl(obj).then((data) => {
		if (data.rows.length) {
			res.send({
				'success': true,
				'short_url': data.rows[0].url_id
			});
		} else {
			res.send({
				'success': false,
				'short_url': 'Not found'
			});
		}
	}).catch((e) => {
		res.send({'error': e.detail});
	});
})