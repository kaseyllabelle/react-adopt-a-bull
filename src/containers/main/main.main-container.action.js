export const GET_PUPPY = 'GET_PUPPY';
export const getPuppyAction = (dispatch) => {
	return fetch('http://localhost:8080/api/puppies/1', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	}).then((obj) => {
		console.log(obj);
		return obj.json().then((o) => {
			return dispatch({
				type: GET_PUPPY,
				payload: o
			})
		});
	})
}

export const FAVORITE_PUPPY = 'FAVORITE_PUPPY';
export const favoritePuppyAction = (dispatch) => {
	return fetch('http://localhost:8080/api/favorite/', {
		method: 'POST',
		headers: {
			// do we need to include headers?
			'Content-Type': 'application/json'
		}
	}).then((obj) => {
		console.log(obj);
		return obj.json().then((o) => {
			return dispatch({
				type: FAVORITE_PUPPY,
				payload: o
			})
		});
	})
}

// // favorite puppy
// $('.favorite').click(function(){
// 	var puppyId = $('.puppy-card-container').data('puppyid');
// 	$.ajax({
// 		method: "POST", 
// 		url: "/api/favorite/", 
// 		data: {userId: localStorage.getItem('userId'), 'puppyId': puppyId}})
// 	.done(function(msg){
// 		renderFavoritePuppies();
// 		getPuppies($('.hidden-puppy').data('nextpuppy'), JSON.parse($('.hidden-puppy p').text()));
// 	});
// });


export const RENDER_FAVORITE_PUPPIES = 'RENDER_FAVORITE_PUPPIES';
export const renderFavoritePuppiesAction = (dispatch) => {
	return fetch(`/api/adopters/${localStorage.getItem('userId')}`, {
		method: 'GET',
		headers: {
			// do we need to include headers?
			'Content-Type': 'application/json'
		}
	}).then((obj) => {
		console.log(obj);
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