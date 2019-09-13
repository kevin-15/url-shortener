const homepage = require('./homepage')
const shortener = require('./shortener')
const open_url_id = require('./open_url_id')

module.exports = app => {
	app.use('/', homepage)
	app.use('/add', shortener)
	app.use('/short_url', open_url_id)
}