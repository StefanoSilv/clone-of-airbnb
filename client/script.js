window.onload= () =>{
	axios.get('/api/houses').then( (res) => {
		let results = res.data
		let pointer= document.getElementById('houses-grid')
		console.log(results)

		results.forEach( (i) => {
			pointer.insertAdjacentHTML('afterBegin', `<div class="houses">
				<div class="houses-imagine">
				</div>
				<div class="house-info">
					<h2>${i.name}</h2>
					<h3>${i.price}</h3>
					<h4>${i.rating}</h4>
				</div>
			</div>`)
		})
	}).catch ((err) => {
		console.log(err);
	})}
