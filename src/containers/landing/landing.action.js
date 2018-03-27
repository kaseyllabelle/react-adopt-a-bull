export const TOGGLE_LOG_IN = 'TOGGLE_LOG_IN';
export const toggleLogInAction = (dispatch) => {
	return dispatch({
		type: TOGGLE_LOG_IN
	});
};

export const SIGN_IN = 'SIGN_IN';
export const signInAction = (dispatch, email, password) => {
	const data = JSON.stringify({
		email, 
		password
	});
	// MAKE SURE TO UPDATE LOCALHOST OR WE CAN'T SEE PUPPIES AND THAT IS SAD
	return fetch('http://localhost:8080/user/sign-in/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: data
	}).then((obj) => {
		console.log(obj);
		return obj.json().then((o) => {
			return dispatch({
				type: SIGN_IN,
				payload: o
			})
		});
	});
};