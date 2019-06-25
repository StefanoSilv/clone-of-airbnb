window.onload= () =>{
	//Houses in the DOM
	axios.get('/api/houses').then( (res) => {
		let results = res.data
		let pointer= document.getElementById('houses-grid')

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
	})

	axios.get('/api/houses').then( (res)=>{
		let cities= res.data
		let city_pointer= document.getElementById('city-banner')

		cities.forEach( (c)=> {
			city_pointer.insertAdjacentHTML('afterBegin',`<div class="city">
				<div class="city-imagine">
				</div>
				<div class="city-info">
				<h3>${c.name}</h3>
				<h4>${c.country}</h4>
				</div>
			</div>
			`)
		})
	}).catch((err) => {
		console.log(err);
	})
}
