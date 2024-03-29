//Setting the server

const express = require('express') //Require express
const app = express() //The function app
const path = require('path')

//Requiring the dotenv file

require('dotenv').config()

//Requiring the database

const db = require('./db.js')

//The server is running

app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/airbnb.html'))
})


//API

app.get('/api/types', require('./controllers/types_get.js'))
app.get('/api/countries', require('./controllers/countries_get.js'))
app.get('/api/cities', require('./controllers/cities_get.js'))

//API with query

app.get('/api/houses', require('./controllers/houses_get.js'))





//The server is listening

app.listen(process.env.PORT, () => {
	console.log(`The server airbnb is running on port ${process.env.PORT}`);
})
