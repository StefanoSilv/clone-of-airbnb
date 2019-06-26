window.onload= () =>{
	// Countries in the DOM
	axios.get('/api/countries').then( (res)=>{
		let country= res.data
		let country_pointer= document.getElementById('country-banner')

		country.forEach( (c)=> {
			country_pointer.insertAdjacentHTML('afterBegin',`
			<a class="country_minibanner">
				<div class="country-imagine" style="background-image: url('${c.image}')">
				</div>
				<div class="country-info">
				<h3 class="random_name1" id=${c.id}>${c.name}</h3>
				</div>
			</a>
			`)
		})
	}).catch((err) => {
		console.log(err);
	})

	//Cities in the DOM
	axios.get('/api/cities').then( (res)=>{
		let city= res.data
		let city_pointer= document.getElementById('city-banner')

		city.forEach( (j)=> {
			city_pointer.insertAdjacentHTML('afterBegin',`
			<a class="city_minibanner">
				<div class="city-imagine" style="background-image: url('${j.image}')">
				</div>
				<div class="city-info">
				<h3 class="random_name2" id=${j.id}>${j.name}</h3>
				</div>
			</a>
			`)
		})
	}).catch((err) => {
		console.log(err);
	})

	//Types in the DOM
	axios.get('/api/types').then( (res)=>{
		console.log(res.data);

		let type= res.data
		let type_pointer= document.getElementById('type-banner')

		type.forEach( (j)=> {
			type_pointer.insertAdjacentHTML('afterBegin',`
			<a class="type_minibanner">
				<div class="type-imagine" style="background-image: url('${j.image}')">
				</div>
				<div class="type-info">
				<h3 class="random_name3" id=${j.id}>${j.name}</h3>
				</div>
			</a>
			`)
		})
	}).catch((err) => {
		console.log(err);
	})


	//Houses in the DOM by country
	document.addEventListener( 'click', (e) =>{
		let target= e.target.id
		if  (e.target.classList.contains('random_name1')){
			axios.get(`/api/houses?country=${e.target.id}`).then( (res) => {
				let results = res.data
				let pointer= document.getElementById('houses-grid')
				pointer.innerHTML = ''

				results.forEach( (i) => {
					pointer.insertAdjacentHTML('afterBegin', `<div class="houses">
						<div class="houses-imagine" style="background-image: url('${i.image}')">
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

	//Houses in the DOM by city
	document.addEventListener( 'click', (e) =>{
		let target= e.target.id
		if  (e.target.classList.contains('random_name2')){
			axios.get(`/api/houses?city=${e.target.id}`).then( (res) => {
				let results = res.data
				let pointer = document.getElementById('houses-grid')
				pointer.innerHTML = ''

				results.forEach( (i) => {
					// let stars_number= `${i.rating}`
					// for (j = 0; j <= stars_number; j++) {
					//   <i class="far fa-star"></i>
					// }
					pointer.insertAdjacentHTML('afterBegin', `<div class="houses">
						<div class="houses-imagine" style="background-image: url('${i.image}')">
						</div>
						<div class="house-info">
							<h2>${i.name}</h2>
							<h3>${i.price} €</h3>
							<h4>${i.rating}</h4>
						</div>
					</div>`)

					// for (j = 0; j <= stars_number; j++) {
					//   <i class="far fa-star"></i>
					// }
				})
			}).catch ((err) => {
				console.log(err);
			})
		}
	})
}

//Houses in the DOM by types

document.addEventListener( 'click', (e) =>{
	let target= e.target.id
	if  (e.target.classList.contains('random_name3')){
		axios.get(`/api/houses?type=${e.target.id}`).then( (res) => {
			let results = res.data
			let pointer= document.getElementById('houses-grid')
			pointer.innerHTML = ''
			
			results.forEach( (i) => {
				pointer.insertAdjacentHTML('afterBegin', `<div class="houses">
					<div class="houses-imagine" style="background-image: url('${i.image}')">
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
