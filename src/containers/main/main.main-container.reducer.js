import {GET_PUPPY, FAVORITE_PUPPY, RENDER_FAVORITE_PUPPIES} from './main.main-container.action';

const initialState = {
	puppyFromStore: []
};

export default function mainContainerReducer(state=initialState, action) {
	if (action.type === GET_PUPPY) {
		return {...state, puppyFromStore: action.payload};
	}
	else {
		return state;
	}
};