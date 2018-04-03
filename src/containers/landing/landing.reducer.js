import {TOGGLE_LOG_IN, SIGN_IN} from './landing.action';

const initialState = {
	logInFromStore: true
};

export default function landingReducer(state=initialState, action) {
	if (action.type === TOGGLE_LOG_IN) {
		return {...state, logInFromStore: !state.logInFromStore};
	}
	if (action.type === SIGN_IN) {
		// console.log(action.payload);
		localStorage.setItem('userId', action.payload.user._id);
		return {...state, jwtFromStore: action.payload.authToken, userIdFromStore: action.payload.user._id}
	}
	else {
		return state;
	}
};