const express = require('express') //Require express
const app = express() //The function app
const path= require(path)

app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/airbnb.html'))
	console.log('__dirname', __dirname)
})












app.listen(3010, () => {
	console.log("The server airbnb is running on port 3010");
})
