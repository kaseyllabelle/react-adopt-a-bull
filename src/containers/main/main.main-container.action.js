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

// get ajax calls into actions https://github.com/kaseyllabelle/adopt-a-bull/blob/master/public/js/app.js