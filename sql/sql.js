const Router = require('express-promise-router')
const db = require('../config')

async function createShortUrl(obj) {
	let custom = obj.url_id.includes('custom-') ? true : false;
	let regex = /custom-/g;
	let url_id = obj.url_id.replace(regex, '');

	let sql = `
		INSERT INTO shortener (
			id, original_url, url_id, short_url, custom, created_at, updated_at
		) VALUES (
			uuid_generate_v4(),
			'${obj.original_url}',
			'${url_id}',
			'${url_id}',
			'${custom}',
			now(),
			now()
		);
	`;

	const rows = await db.query(sql);

	return rows;
}

async function checkUrl(obj) {
	let regex = /custom-/g;
	let url_id = obj.url_id.replace(regex, '');

	let sql = `
		SELECT * FROM shortener WHERE url_id = '${url_id}';
	`;

	console.log(sql);

	const rows = await db.query(sql);

	return rows;
}

module.exports = {
	createShortUrl,
	checkUrl
};