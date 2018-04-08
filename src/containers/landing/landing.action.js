export const TOGGLE_LOG_IN = 'TOGGLE_LOG_IN';
export const toggleLogInAction = (dispatch, logIn) => {
	return dispatch({
		type: TOGGLE_LOG_IN,
		payload: logIn
	});
};

export const SIGN_IN = 'SIGN_IN';
export const signInAction = (dispatch, email, password) => {
	const data = JSON.stringify({
		email, 
		password
	});
	return fetch(window.API_URL + '/user/sign-in/', {
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