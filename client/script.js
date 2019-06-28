window.onload= () =>{
	axios.get(`/api/houses`).then( (res) => {
		let results = res.data
		let pointer= document.getElementById('houses-grid')
		pointer.innerHTML = ''
		results.forEach( (i) => {
			let stars=''
			for (numb=0; numb<= i.rating; numb++){
				stars += `<i class="fas fa-star"></i>`
			}
			pointer.insertAdjacentHTML('afterBegin', `<div class="houses">
					<div class="houses-imagine" style="background-image: url('${i.image}')">
					</div>
					<div class="house-info">
						<h2>${i.name}</h2>
						<h3>${i.price} €</h3>
						<h4>${stars}</h4>
					</div>
				</div>`)
		})
	}).catch ((err) => {
		console.log(err);
	})




	//Countries, Cities and types in the DOM just when you click

	document.addEventListener( 'click', (e) =>{
		if(e.target.classList.contains('price')){
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
		}
		if(e.target.classList.contains('rating')){
			rating_max_pointer= document.getElementById('rating_max')
			rating_min_pointer= document.getElementById('rating_min')

			let stars_max=''
			for (numb2=1; numb2<= 5; numb2++){
				let code=`<i class="fas fa-star rating_max_anc" id=${numb2} class= ""></i>`
				let stars_numb2= code.repeat(numb2)
				stars_max += `<li><a href="#">${stars_numb2}</a></li>`
			}

			let stars_min=''
			for (numb1=1; numb1<= 5; numb1++){
				let code1=`<i class="fas fa-star rating_min_anc" id=${numb1}></i>`
				let stars_numb1= code1.repeat(numb1)
				stars_min += `<li><a href="#">${stars_numb1}</a></li>`
			}

			rating_max_pointer.insertAdjacentHTML('afterBegin',`${stars_max}`)
			rating_min_pointer.insertAdjacentHTML('afterBegin',`${stars_min}`)
		}
		if(e.target.classList.contains('country')){
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
		}
		if(e.target.classList.contains('city')){
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
		}
		if(e.target.classList.contains('type')){
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
		}
	}
	)

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
			url += `&rating_max=${e.target.id}`
		}
		if  (e.target.classList.contains('rating_min_anc')){
			url += `&rating_min=${e.target.id}`
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
		console.log(e.target);
		let pointer= document.getElementById('houses-grid')
		axios.get(`/api/houses?${url}`).then( (res) => {
			let results = res.data
			console.log('results', res.data);
			let pointer= document.getElementById('houses-grid')
			pointer.innerHTML = ''
			if(results.length){
				results.forEach( (i) => {
					let stars=''
					for (numb=1; numb<= i.rating; numb++){
						stars += `<i class="fas fa-star"></i>`
						console.log(numb)
					}
					pointer.insertAdjacentHTML('afterBegin', `<div class="houses">
							<div class="houses-imagine" style="background-image: url('${i.image}')">
							</div>
							<div class="house-info">
								<h2>${i.name}</h2>
								<h3>${i.price} €</h3>
								<h4>${stars}</h4>
							</div>
						</div>`)
				})
			}else{pointer.innerHTML= '<h1>No Results</h1>'}}).catch ((err) => {
			console.log('err', err);
			pointer.innerHTML= '<h1>No Results</h1>'
		})
	}
	)
}
