window.onload= () =>{
	// Countries in the DOM
	axios.get('/api/countries').then( (res)=>{
		let country= res.data
		let country_pointer= document.getElementById('country-banner')

		country.forEach( (c)=> {
			country_pointer.insertAdjacentHTML('afterBegin',`
			<a class="country_minibanner">
				<div class="country-imagine">
				</div>
				<div class="country-info">
				<h3 class="random_name" id=${c.id}>${c.name}</h3>
				</div>
			</a>
			`)
		})
	}).catch((err) => {
		console.log(err);
	})


	//Houses in the DOM
	document.addEventListener( 'click', (e) =>{
		let target= e.target.id
		console.log(e.target);
		if  (e.target.classList.contains('random_name')){
			axios.get(`/api/houses?country=${e.target.id}`).then( (res) => {
				let results = res.data
				console.log(results);
				console.log('hello');
				let pointer= document.getElementById('houses-grid')
				pointer.innerHTML = ''

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
		}
	})
}
