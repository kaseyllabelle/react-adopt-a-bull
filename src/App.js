import React, {Fragment} from 'react';
import {Route} from 'react-router';

import Header from './components/header.component';
import Landing from './containers/landing/landing';
import MainContainer from './containers/main/main.main-container';

const App = () => (
  <Fragment> {/* use Fragment or empty tags as wrappers to avoid extra divs: <> </> */}
    <Route path="/" component={Header} />
    <Route path="/main/:id" component={MainContainer} />
    <Route exact path="/" component={Landing} signUp={true}/>
  </Fragment>
)

export default App;