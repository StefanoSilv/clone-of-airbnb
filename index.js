//Setting the server

const express = require('express') //Require express
const app = express() //The function app
const path= require('path')

//Requiring the database

const db= require('./db.js')

//The server is running

app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/airbnb.html'))
})


//API

app.get('/api/type/:apt', require('./controllers/type_get.js'))
app.get('/api/countries', require('./controllers/country_get.js'))
app.get('/api/city/:town', require('./controllers/city_get.js'))

//API with query

app.get('/api/houses', require('./controllers/houses_get.js'))





//The server is listening

app.listen(3010, () => {
	console.log('The server airbnb is running on port 3010');
})
