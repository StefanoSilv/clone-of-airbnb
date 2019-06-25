const {Client}= require('pg')

const db= new Client({connectionString:'postgres://macbookpro:@localhost:5432/airbnb'})
