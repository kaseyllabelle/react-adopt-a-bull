import React, { Component } from 'react';
import logo from './logo.svg';
import {Route} from 'react-router';

import Header from './components/header.component';
import Landing from './containers/landing/landing';
import List from './containers/list/main.list';
import MainContainer from './containers/main/main.main-container';
import Settings from './containers/settings/main.settings';

const App = () => (
  <div>
    <Route path="/" component={Header} />
    <Route path="/main/:id" component={MainContainer} />
    <Route exact path="/" component={Landing} signUp={true}/>
  </div>
)

export default App;