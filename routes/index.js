const shortener = require('./shortener')

module.exports = app => {
	app.use('/', shortener)
}