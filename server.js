//Package Call ==========================================================================================

var app = require('express')()

var bodyParser = require('body-parser')

var morgan = require('morgan')

var mongoose = require('mongoose')

var port = process.env.PORT || 8080

//App Config ============================================================================================

//use body parser to grab info from POST requests
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//configure app to handle CORS requests
app.use(function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods','GET,POST')
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \ Authorization')
	next()
})

//log all requests to console
app.use(morgan('dev'))

//API Routes =============================================================================================

//basic route
app.get('/', function(req, res){
	res.send('Welcome to the home page!')
})

//get instance of express router
var apiRouter = express.Router()

//test route
apiRouter.get('/', function(req, res){
	res.json({ message: 'hooray! welcome to our api!'})
})

// space for more routes here

//REGISTER ROUTES
app.use('/api', apiRouter)

//Start server ============================================================================================

app.listen(port)
console.log('Magic happens on port ' + port)