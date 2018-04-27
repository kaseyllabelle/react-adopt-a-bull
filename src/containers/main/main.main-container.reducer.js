import {GET_PUPPY, NO_MORE_PUPPIES, RENDER_FAVORITE_PUPPIES, RENDER_ADOPTABULL_PUPPIES, SHELTER_PROFILE} from './main.main-container.action';

const initialState = {
	puppyNumFromStore: 0,
	puppyFromStore: [],
	favoritePuppiesFromStore: [],
	adoptabullPuppiesFromStore: [],
	noMorePuppiesFromStore: false,
	shelterProfileFromStore: {
		unset: true
	}
};

export default function mainContainerReducer(state=initialState, action) {
	if (action.type === GET_PUPPY) {
		return {...state, puppyNumFromStore: action.puppyNum + 1, puppyFromStore: action.payload};
	}
	if (action.type === NO_MORE_PUPPIES) {
		return {...state, noMorePuppiesFromStore: true};
	}
	if (action.type === RENDER_FAVORITE_PUPPIES) {
		action.payload.favoritePuppies = action.payload.favoritePuppies.sort(function(){
			return 1;
		})
		return  {...state, favoritePuppiesFromStore: action.payload};
	}
	if (action.type === RENDER_ADOPTABULL_PUPPIES) {
		action.payload.adoptabullPuppies = action.payload.adoptabullPuppies.sort(function(){
			return 1;
		})
		return  {...state, adoptabullPuppiesFromStore: action.payload};
	}
	if (action.type === SHELTER_PROFILE) {
		return  {...state, shelterProfileFromStore: action.payload};
	}
	else {
		return state;
	}
};