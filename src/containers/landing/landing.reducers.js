import {TOGGLE_LOG_IN} from './landing.actions';

const initialState = {
	signUp: true
};

export default function landingReducer(state=initialState, action) {
	console.log(action);
	
    if (action.type === TOGGLE_LOG_IN) {
    	return {...state, signUp: !state.signUp};
    }
    else {
    	return state;
    }
};