import {createStore} from 'redux';

import combinedReducers from './reducers/app.reducer';

export default createStore(combinedReducers());