const Router = require('express-promise-router')
const validUrl = require('valid-url');
const shortid = require('shortid');

const router = new Router()
module.exports = router

const db = require('../sql/sql');

router.post('/', async (req, res) => {
	const { original_url, url_id } = req.body;
	let obj = { original_url };
	obj['url_id'] = url_id ? 'custom-' + url_id : shortid.generate()

	db.checkUrl(obj).then((data) => {
		if (data.rows.length) {
			res.send({
				'success': true,
				'short_url': data.rows[0].url_id
			});
		}

		return obj;

	}).then((obj) => {
		db.createShortUrl(obj).then((data) => {
			let regex = /custom-/g;
			let url_id = obj.url_id.replace(regex, '');

			res.send({
				'success': true,
				'short_url': url_id
			});
		}).catch((e) => {
			return e;
		});
	}).catch((e) => {
		res.send({'error': e.detail});
	});
})