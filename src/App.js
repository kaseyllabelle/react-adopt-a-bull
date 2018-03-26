import React, { Component } from 'react';
import logo from './logo.svg';
import {Route} from 'react-router';

import Header from './components/header.components';
import Landing from './containers/landing/landing';
import List from './containers/list/main.list';
import Main from './containers/main/main';
import Settings from './containers/settings/main.settings';

const App = () => (
  <div>
    <Route path="/" component={Header} />
    <Route path="/main/:id" component={List} />
    <Route path="/main/:id" component={Main} />
    <Route path="/main/:id" component={Settings} />
    <Route exact path="/" component={Landing} signUp={true}/>
  </div>
)

export default App;