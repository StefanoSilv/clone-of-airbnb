const db = require('../db')

module.exports = (req, res) => {
	let query = `SELECT * FROM houses ` // default query = all products
	let i=0;
	if (req.query && Object.keys(req.query).length) { // add WHERE if request has query
		query += `WHERE `
	}
	if (req.query.type) { //If you put type equal to something, then make type equal to that thing
		query += `type = ${req.query.type} `
		i++
	}
	// if(i!=0){
	// 	query +=`AND `
	// 	i=0
	// }
	if (req.query.country) {
		if(i!=0){
			query +=`AND `
			i=0}
		query += `country = ${req.query.country} `
		i++
	}
	// if(i!=0){
	// 	query +=`AND `
	// 	i=0
	// }
	if (req.query.city) {
		if(i!=0){
			query +=`AND `
			i=0
		}
		query += `city = ${req.query.city} `
		i++
	}

	if(req.query.price_max || req.query.price_min){
		if(i!=0){
			query +=`AND `
			i=0
		}
		query += `price `
		if(req.query.price_max && req.query.price_min){
			query += `BETWEEN ${req.query.price_min} AND ${req.query.price_max} `
			i++
		}else if(req.query.price_min){
			query += `> ${req.query.price_min} `
			i++
		}else{
			query += `< ${req.query.price_max} `
			i++
		}
	}

	if(req.query.rooms_max || req.query.rooms_min){
		if(i!=0){
			query +=`AND `
			i=0
		}
		query += `rooms `
		if(req.query.rooms_max && req.query.rooms_min){
			query += `BETWEEN ${req.query.rooms_min} AND ${req.query.rooms_max} `
			i++
		}else if(req.query.rooms_min){
			query += `> ${req.query.rooms_min} `
			i++
		}else{
			query += `< ${req.query.rooms_max} `
			i++
		}
	}

	if(req.query.rating_max || req.query.rating_min){
		if(i!=0){
			query +=`AND `
			i=0
		}
		query += `rating `
		if(req.query.rating_max && req.query.rating_min){
			query += `BETWEEN ${req.query.rating_min} AND ${req.query.rating_max} `
			i++
		}else if(req.query.rating_min){
			query += `> ${req.query.rating_min} `
			i++
		}else{
			query += `< ${req.query.rating_max} `
			i++
		}
	}

	// if (req.query.price_max) {
	// 	query += `price < ${req.query.price_max} `
	// }
	// if (req.query.price_min) {
	// 	query += `price > ${req.query.price_min} `
	// }

	console.log(req.query);
	console.log(query)
	console.log(req.query);

	db.query(query, (err, result) => {
		if (err) {
			res.send(err)
		} else {
			res.send(result.rows)
		}
	})
}
