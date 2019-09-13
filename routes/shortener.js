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

	// if (url_id) {
	// 	obj['url_id'] = url_id;
	// 	obj['custom'] = true;
	// } else {
	// 	obj['url_id'] = shortid.generate()
	// 	obj['custom'] = false;
	// }

	// console.log(obj)

	// res.send({'success': true});

	db.createShortUrl(obj).then((data) => {
		console.log(data);

		res.send({'success': true});
	}).catch((e) => {
		res.send({'error': e.detail});
	});
})