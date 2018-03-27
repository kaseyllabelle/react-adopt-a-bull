import {combineReducers} from 'redux-immutable';
import landingReducer from '../containers/landing/landing.reducer';

export default function createReducer() {
	return combineReducers({
		landing: landingReducer
	});
};