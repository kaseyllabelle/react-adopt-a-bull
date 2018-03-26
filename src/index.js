import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import './styles/css/global.css';
import './styles/css/landing.css';
import './styles/css/main.css';
import './styles/css/list.adopters.css';
import './styles/css/main.adopters.css';

import App from './App';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);