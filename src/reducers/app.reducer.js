import {combineReducers} from 'redux-immutable';
import landingReducer from '../containers/landing/landing.reducer';
import mainContainerReducer from '../containers/main/main.main-container.reducer';

export default function createReducer() {
	return combineReducers({
		landing: landingReducer,
		mainContainer: mainContainerReducer
	});
};