const homepage = require('./homepage')
const shortener = require('./shortener')
const open_url_id = require('./open_url_id')
const web = require('./web')

module.exports = app => {
	app.use('/add', shortener)
	app.use('/web', web)
	app.use('/', open_url_id)
}
