import {GET_PUPPY, RENDER_FAVORITE_PUPPIES} from './main.main-container.action';

const initialState = {
	puppyNumFromStore: 0,
	puppyFromStore: [],
	favoritePuppiesFromStore: []
};

export default function mainContainerReducer(state=initialState, action) {
	if (action.type === GET_PUPPY) {
		return {...state, puppyNumFromStore: action.puppyNum + 1, puppyFromStore: action.payload};
	}
	if (action.type === RENDER_FAVORITE_PUPPIES) {
		console.log(action);

		action.payload.favoritePuppies = action.payload.favoritePuppies.sort(function(){
			return 1;
		})

		return  {...state, favoritePuppiesFromStore: action.payload};
	}
	else {
		return state;
	}
};