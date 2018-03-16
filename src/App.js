import React, { Component } from 'react';
import logo from './logo.svg';

import SkeletonStatefulComponent from './components/skeletonStatefulComponent';
import SkeletonStatelessComponent from './components/skeletonStatelessComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SkeletonStatefulComponent propExample='i am a prop' />
          <hr/>
          <SkeletonStatelessComponent anotherPropExample='smell ya later' />
          <hr/><hr/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
