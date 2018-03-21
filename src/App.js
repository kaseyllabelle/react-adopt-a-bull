import React, { Component } from 'react';
import logo from './logo.svg';
import {Route} from 'react-router';

import Landing from './containers/landing/landing';
import Main from './containers/main/main';

const App = () => (
  <div>
    <Route path="/main/:id" component={Main} />
    <Route exact path="/" component={Landing} signUp={true}/>
  </div>
)

export default App;