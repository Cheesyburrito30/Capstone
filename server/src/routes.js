const authenticationcontroller = require('./controllers/authenticationcontroller')
const authenticationcontrollerpolicy = require('./policies/authenticationcontrollerpolicy')
module.exports = (app) => {
	app.post('/register', 
		authenticationcontrollerpolicy.register,
		authenticationcontroller.register)
}