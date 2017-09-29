const authenticationcontroller = require('./controllers/authenticationcontroller')
const authenticationcontrollerpolicy = require('./policies/authenticationcontrollerpolicy')
const SongsController = require('./controllers/SongsController')
module.exports = (app) => {
	app.post('/register', 
		authenticationcontrollerpolicy.register,
		authenticationcontroller.register)
	app.post('/login', 
		authenticationcontroller.login)
	app.get('/songs',
		SongsController.index)
	app.post('/songs',
		SongsController.post)
}