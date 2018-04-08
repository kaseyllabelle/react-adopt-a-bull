export const GET_PUPPY = 'GET_PUPPY';
export const NO_MORE_PUPPIES = 'NO_MORE_PUPPIES';
export const getPuppyAction = (dispatch, puppyNum = 0) => {
	return fetch(window.API_URL + `/api/puppies/${localStorage.getItem('adopterId')}/${puppyNum}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	}).then((obj) => {
		// console.log(obj);
		if(obj.status === 416) {
			return dispatch({
				type: NO_MORE_PUPPIES
			})
		}
		if(obj.status === 303) {
			getPuppyAction(dispatch, ++ puppyNum);
			return false;
		}
		return obj.json().then((o) => {
			return dispatch({
				type: GET_PUPPY,
				payload: o,
				puppyNum
			})
		});
	})
}

export const ADD_PUPPY = 'ADD_PUPPY';
export const addPuppyAction = (dispatch, puppyJSON) => {
	const data = {
		shelterID: localStorage.getItem('shelterID'),
		puppyJSON
	}
	return fetch(window.API_URL + '/api/puppies/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}).then((obj) => {
		// console.log(obj);
		return obj.json().then((o) => {
			renderFavoritePuppiesAction(dispatch)
		});
	})
}


// { shelterID: null,
//   puppyJSON: '{
//   	"image":{},
//   	"name":"test",
//   	"gender":"female",
//   	"age":"puppy",
//   	"size":"S",
//   	"training":"needs training",
//   	"characteristics":"house-broken",
//   	"compatibility":"apartments",
//   	"biography":"test",
//   	"adoption-fee":"test"
//   }' 
// }

// // create puppy
// router.post('/puppies', (req, res) => {
// 	const requiredFields = ['photo', 'name', 'gender', 'age', 'size', 'shelterId', 'distance'];
// 	for (let i=0; i<requiredFields.length; i++) {
// 		const field = requiredFields[i];
// 		if (!(field in req.body)) {
// 			const message = `Missing \`${field}\` in request body`
// 			console.error(message);
// 			return res.status(400).send(message);
// 		}
// 	}
// 	Puppies.create({
// 		photo: req.body.photo,
// 		name: req.body.name,
// 		gender: req.body.gender,
// 		age: req.body.age,
// 		size: req.body.size,
// 		shelterId: req.body.shelterId,
// 		distance: req.body.distance
// 	})
// 	.then(puppy => res.status(201).json(puppy))
// 	.catch(err => {
// 		console.error(err);
// 		res.status(500).json({message: 'Internal server error'});
// 	});
// });

export const FAVORITE_PUPPY = 'FAVORITE_PUPPY';
export const favoritePuppyAction = (dispatch, puppyId) => {
	const data = {
		userId: localStorage.getItem('userId'),
		puppyId
	}
	return fetch(window.API_URL + '/api/favorite/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}).then((obj) => {
		// console.log(obj);
		return obj.json().then((o) => {
			renderFavoritePuppiesAction(dispatch)
		});
	})
}

export const RENDER_FAVORITE_PUPPIES = 'RENDER_FAVORITE_PUPPIES';
export const renderFavoritePuppiesAction = (dispatch) => {
	return fetch(window.API_URL + `/api/adopters/${localStorage.getItem('userId')}`, {
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