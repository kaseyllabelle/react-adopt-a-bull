import {createStore} from 'redux';

import {appReducer} from './reducers/app.reducers';

export default createStore(appReducer);