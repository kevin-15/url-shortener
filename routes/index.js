const homepage = require('./homepage')
const shortener = require('./shortener')

module.exports = app => {
	app.use('/', homepage)
	app.use('/add', shortener)
}