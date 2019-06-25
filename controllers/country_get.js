const db= require('../db.js')

module.exports= (req,res) =>{
	db.query(`SELECT * FROM houses WHERE country=${res.params.nation}`, (err, result) => {
		if (err) {
			console.log(`There is the following error: ${err}`);
		}else{
			res.send(result.rows)
		}
	})
}
