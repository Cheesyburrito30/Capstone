const express = require('express')
const bodyParser = require('body-parser')
const { sequelize } = require('./models')
const cors = require('cors')
const config = require('./config/config')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.get('/status', (req, res)=> {
	res.send({
		message: 'hello!'
	})
})
require('./routes')(app)

sequelize.sync()
	.then(() =>{
		app.listen(config.port)
		console.log(`server started on port ${config.port}`)
	})
