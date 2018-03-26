import {TOGGLE_LOG_IN, SIGN_IN} from './landing.actions';

const initialState = {
	logInFromStore: true
};

export default function landingReducer(state=initialState, action) {
	console.log(action);
	
	if (action.type === TOGGLE_LOG_IN) {
		return {...state, logInFromStore: !state.logInFromStore};
	}
	if (action.type === SIGN_IN) {
		console.log(action.payload);
		return {...state, jwtFromStore: action.payload.authToken, userIdFromStore: action.payload.user._id}
	}
	else {
		return state;
	}
};