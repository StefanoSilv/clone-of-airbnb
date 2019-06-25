//Setting of the database

const {Client}= require('pg')

const db= new Client({connectionString:'postgres://macbookpro:@localhost:5432/macbookpro'})

//Connection of the database

db.connect( (err) =>{
	if (err){
		console.log('The database airbnb is not connected');
	}else{
		console.log('The airbnb database is successfully connected');
	}
})

module.exports=db
