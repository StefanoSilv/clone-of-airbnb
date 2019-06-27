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



	//Prices in the DOM
	let prices=[20,50,100,200,300,500]
	price_max_pointer= document.getElementById('price_max')
	price_min_pointer= document.getElementById('price_min')


	prices.forEach( (pr)=> {
		price_max_pointer.insertAdjacentHTML('afterBegin',`
		<li><a class= price_max_anc href="#">${pr}</a></li>
		`)
	})
	prices.forEach( (pr)=> {
		price_min_pointer.insertAdjacentHTML('afterBegin',`
		<li><a class="price_min_anc" href="#">${pr}</a></li>
		`)
	})

	//Ratings search in the DOM

	let ratings=[1,2,3,4,5]
	rating_max_pointer= document.getElementById('rating_max')
	rating_min_pointer= document.getElementById('rating_min')


	ratings.forEach( (ra)=> {
		rating_max_pointer.insertAdjacentHTML('afterBegin',`
		<li><a class= rating_max_anc href="#">${ra}</a></li>
		`)
	})
	ratings.forEach( (ra)=> {
		rating_min_pointer.insertAdjacentHTML('afterBegin',`
		<li><a class="rating_min_anc" href="#">${ra}</a></li>
		`)
	})

	//URL construction
	// let url=''
	// if  (e.target.classList.contains('price_max_anc')){
	// 	url += `&price_max=${e.target.innerHTML}`
	// }
	// if  (e.target.classList.contains('price_min_anc')){
	// 	url += `&price_min=${e.target.innerHTML}`
	// }
	// if  (e.target.classList.contains('rating_max_anc')){
	// 	url += `&rating_max=${e.target.innerHTML}`
	// }
	// if  (e.target.classList.contains('rating_min_anc')){
	// 	url += `&rating_min=${e.target.innerHTML}`
	// }
	// if  (e.target.classList.contains('random_name1')){
	// 	url += `&country=${e.target.id}`
	// }
	// if  (e.target.classList.contains('random_name2')){
	// 	url += `&city=${e.target.id}`
	// }
	// if  (e.target.classList.contains('random_name3')){
	// 	url += `&city=${e.target.id}`
	// }

	//Houses in the DOM filtered
	let url=''
	document.addEventListener( 'click', (e) =>{
		if  (e.target.classList.contains('price_max_anc')){
			url += `&price_max=${e.target.innerHTML}`
		}
		if  (e.target.classList.contains('price_min_anc')){
			url += `&price_min=${e.target.innerHTML}`
		}
		if  (e.target.classList.contains('rating_max_anc')){
			url += `&rating_max=${e.target.innerHTML}`
		}
		if  (e.target.classList.contains('rating_min_anc')){
			url += `&rating_min=${e.target.innerHTML}`
		}
		if  (e.target.classList.contains('random_name1')){
			url += `&country=${e.target.id}`
		}
		if  (e.target.classList.contains('random_name2')){
			url += `&city=${e.target.id}`
		}
		if  (e.target.classList.contains('random_name3')){
			url += `&type=${e.target.id}`
		}
		console.log(url);
		console.log(e.target);
		axios.get(`/api/houses?${url}`).then( (res) => {
			console.log(res.data);
			let results = res.data
			let pointer= document.getElementById('houses-grid')
			pointer.innerHTML = ''
			results.forEach( (i) => {
				let stars=''
				for (numb=0; numb<= i.rating; numb++){
					stars += `<i class="far fa-star"></i>`
				}
				pointer.insertAdjacentHTML('afterBegin', `<div class="houses">
						<div class="houses-imagine" style="background-image: url('${i.image}')">
						</div>
						<div class="house-info">
							<h2>${i.name}</h2>
							<h3>${i.price}</h3>
							<h4>${stars}</h4>
						</div>
					</div>`)
			})
		}).catch ((err) => {
			console.log(err);
		})
	}
	)



// 	//Houses in the DOM by country
// 	document.addEventListener( 'click', (e) =>{
// 		let target= e.target.id
// 		if  (e.target.classList.contains('random_name1')){
// 			axios.get(`/api/houses?country=${e.target.id}`).then( (res) => {
// 				let results = res.data
// 				let pointer= document.getElementById('houses-grid')
// 				pointer.innerHTML = ''
//
// 				results.forEach( (i) => {
// 					let stars=''
// 					for (numb=0; numb<= i.rating; numb++){
// 						stars += `<i class="far fa-star"></i>`
// 					}
// 					pointer.insertAdjacentHTML('afterBegin', `<div class="houses">
// 						<div class="houses-imagine" style="background-image: url('${i.image}')">
// 						</div>
// 						<div class="house-info">
// 							<h2>${i.name}</h2>
// 							<h3>${i.price}</h3>
// 							<h4>${stars}</h4>
// 						</div>
// 					</div>`)
// 				})
// 			}).catch ((err) => {
// 				console.log(err);
// 			})
// 		}
// 	})
//
// 	//Houses in the DOM by city
// 	document.addEventListener( 'click', (e) =>{
// 		let target= e.target.id
// 		if  (e.target.classList.contains('random_name2')){
// 			axios.get(`/api/houses?city=${e.target.id}`).then( (res) => {
// 				let results = res.data
// 				let pointer = document.getElementById('houses-grid')
// 				pointer.innerHTML = ''
//
// 				results.forEach( (i) => {
// 					let stars=''
// 					for (numb=0; numb<= i.rating; numb++){
// 						stars += `<i class="far fa-star"></i>`
// 					}
// 					pointer.insertAdjacentHTML('afterBegin', `<div class="houses">
// 						<div class="houses-imagine" style="background-image: url('${i.image}')">
// 						</div>
// 						<div class="house-info">
// 							<h2>${i.name}</h2>
// 							<h3>${i.price} €</h3>
// 							<h4>${stars}</h4>
// 						</div>
// 					</div>`)
// 				})
// 			}).catch ((err) => {
// 				console.log(err);
// 			})
// 		}
// 	})
// }
//
// //Houses in the DOM by types
//
// document.addEventListener( 'click', (e) =>{
// 	let target= e.target.id
// 	if  (e.target.classList.contains('random_name3')){
// 		axios.get(`/api/houses?type=${e.target.id}`).then( (res) => {
// 			let results = res.data
// 			let pointer= document.getElementById('houses-grid')
// 			pointer.innerHTML = ''
//
// 			results.forEach( (i) => {
// 				let stars=''
// 				for (numb=0; numb<= i.rating; numb++){
// 					stars += `<i class="far fa-star"></i>`
// 				}
// 				pointer.insertAdjacentHTML('afterBegin', `<div class="houses">
// 					<div class="houses-imagine" style="background-image: url('${i.image}')">
// 					</div>
// 					<div class="house-info">
// 						<h2>${i.name}</h2>
// 						<h3>${i.price}</h3>
// 						<h4>${stars}</h4>
// 					</div>
// 				</div>`)
// 			})
// 		}).catch ((err) => {
// 			console.log(err);
// 		})
// 	}
// })
//
// //Houses in the DOM by price_max
//
// document.addEventListener( 'click', (e) =>{
// 	if  (e.target.classList.contains('price_max_anc')){
// 		axios.get(`/api/houses?price_max=${e.target.innerHTML}`).then( (res) => {
// 			let results = res.data
// 			let pointer= document.getElementById('houses-grid')
// 			pointer.innerHTML = ''
//
// 			results.forEach( (i) => {
// 				let stars=''
// 				for (numb=0; numb<= i.rating; numb++){
// 					stars += `<i class="far fa-star"></i>`
// 				}
// 				pointer.insertAdjacentHTML('afterBegin', `<div class="houses">
// 					<div class="houses-imagine" style="background-image: url('${i.image}')">
// 					</div>
// 					<div class="house-info">
// 						<h2>${i.name}</h2>
// 						<h3>${i.price}</h3>
// 						<h4>${stars}</h4>
// 					</div>
// 				</div>`)
// 			})
// 		}).catch ((err) => {
// 			console.log(err);
// 		})
// 	}
// })
//
// //Houses in the DOM by price_min
//
// document.addEventListener( 'click', (e) =>{
// 	if  (e.target.classList.contains('price_min_anc')){
// 		axios.get(`/api/houses?price_min=${e.target.innerHTML}`).then( (res) => {
// 			let results = res.data
// 			let pointer= document.getElementById('houses-grid')
// 			pointer.innerHTML = ''
//
// 			results.forEach( (i) => {
// 				let stars=''
// 				for (numb=0; numb<= i.rating; numb++){
// 					stars += `<i class="far fa-star"></i>`
// 				}
// 				pointer.insertAdjacentHTML('afterBegin', `<div class="houses">
// 					<div class="houses-imagine" style="background-image: url('${i.image}')">
// 					</div>
// 					<div class="house-info">
// 						<h2>${i.name}</h2>
// 						<h3>${i.price}</h3>
// 						<h4>${stars}</h4>
// 					</div>
// 				</div>`)
// 			})
// 		}).catch ((err) => {
// 			console.log(err);
// 		})
// 	}
// })
//
// //Houses in the DOM by rating_min
//
// document.addEventListener( 'click', (e) =>{
// 	if  (e.target.classList.contains('rating_min_anc')){
// 		axios.get(`/api/houses?rating_min=${e.target.innerHTML}`).then( (res) => {
// 			let results = res.data
// 			let pointer= document.getElementById('houses-grid')
// 			pointer.innerHTML = ''
// 			results.forEach( (i) => {
// 				let stars=''
// 				for (numb=0; numb<= i.rating; numb++){
// 					stars += `<i class="far fa-star"></i>`
// 				}
// 				pointer.insertAdjacentHTML('afterBegin', `<div class="houses">
// 					<div class="houses-imagine" style="background-image: url('${i.image}')">
// 					</div>
// 					<div class="house-info">
// 						<h2>${i.name}</h2>
// 						<h3>${i.price}</h3>
// 						<h4>${stars}</h4>
// 					</div>
// 				</div>`)
// 			})
// 		}).catch ((err) => {
// 			console.log(err);
// 		})
// 	}
// })
//
// //Houses in the DOM by rating_max
//
// document.addEventListener( 'click', (e) =>{
// 	if  (e.target.classList.contains('rating_max_anc')){
// 		axios.get(`/api/houses?rating_max=${e.target.innerHTML}`).then( (res) => {
// 			let results = res.data
// 			let pointer= document.getElementById('houses-grid')
// 			pointer.innerHTML = ''
// 			results.forEach( (i) => {
// 				let stars=''
// 				for (numb=0; numb<= i.rating; numb++){
// 					stars += `<i class="far fa-star"></i>`
// 				}
// 				pointer.insertAdjacentHTML('afterBegin', `<div class="houses">
// 					<div class="houses-imagine" style="background-image: url('${i.image}')">
// 					</div>
// 					<div class="house-info">
// 						<h2>${i.name}</h2>
// 						<h3>${i.price}</h3>
// 						<h4>${stars}</h4>
// 					</div>
// 				</div>`)
// 			})
// 		}).catch ((err) => {
// 			console.log(err);
// 		})
// 	}
// })
} //added after
