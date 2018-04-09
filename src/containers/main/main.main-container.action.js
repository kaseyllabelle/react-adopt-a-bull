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
		shelterId: localStorage.getItem('shelterId'),
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

export const RESET_PASSWORD = 'RESET_PASSWORD';
export const resetPasswordAction = (dispatch, oldPassword, newPassword) => {
	return fetch(window.API_URL + `/user/${localStorage.getItem('userId')}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({oldPassword, newPassword})
	}).then((obj) => {
		console.log(obj);
		alert("password updated");
		return dispatch({
			type: RESET_PASSWORD
		})
	})
}

export const DEACTIVATE_ACCOUNT = 'DEACTIVATE_ACCOUNT';
export const deactivateAccountAction = () => {
	return fetch(window.API_URL + `/user/${localStorage.getItem('userId')}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		}
	}).then((obj) => {
		delete localStorage.userId;
		delete localStorage.adopterId;
		delete localStorage.shelterId;
		window.location.href = "/";
	})
}