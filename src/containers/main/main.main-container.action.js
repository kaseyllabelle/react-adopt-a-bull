export const GET_PUPPY = 'GET_PUPPY';
export const getPuppyAction = (dispatch, puppyNum = 0) => {
	return fetch(`http://localhost:8080/api/puppies/${puppyNum}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	}).then((obj) => {
		// console.log(obj);
		return obj.json().then((o) => {
			return dispatch({
				type: GET_PUPPY,
				payload: o
			})
		});
	})
}

export const FAVORITE_PUPPY = 'FAVORITE_PUPPY';
export const favoritePuppyAction = (dispatch, puppyId) => {
	const data = {
		userId: localStorage.getItem('userId'),
		puppyId
	}
	return fetch('http://localhost:8080/api/favorite/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}).then((obj) => {
		// console.log(obj);
		return obj.json().then((o) => {
			// return dispatch({
			// 	type: FAVORITE_PUPPY,
			// 	payload: puppyId
			// })
			renderFavoritePuppiesAction(dispatch)
		});
	})
}

export const RENDER_FAVORITE_PUPPIES = 'RENDER_FAVORITE_PUPPIES';
export const renderFavoritePuppiesAction = (dispatch) => {
	return fetch(`http://localhost:8080/api/adopters/${localStorage.getItem('userId')}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	}).then((obj) => {
		// console.log(obj);
		return obj.json().then((o) => {
			return dispatch({
				type: RENDER_FAVORITE_PUPPIES,
				payload: o
			})
		});
	})
}

// // render list of unique favorites
// function renderFavoritePuppies(){
// 	$('.favorite-puppies').html('');
// 	$.ajax({url: `/api/adopters/${localStorage.getItem('userId')}`}).done(function(data){
// 		let favoritePuppies = data.favoritePuppies;
// 		// var array = favoritePuppies.map(a => a._id);
// 		// let uniqueFavoritePuppies = [...new Set(array)];
// 		favoritePuppies = _.uniqBy(favoritePuppies, '_id');
// 		for(i=0;i<favoritePuppies.length;i++){
// 			$('.favorite-puppies').prepend(`
// 				<div class="puppy-container">
// 					<img src="${favoritePuppies[i].photo}" class="puppy-thumbnail" />
// 					<div class="puppy-info">
// 						<p class="puppy-name">${favoritePuppies[i].name}</p>
// 						<i class="material-icons puppy-icon">favorite</i>
// 					</div>
// 				</div>
// 			`);
// 		}
// 	});
// }
// renderFavoritePuppies();