import React, { Component } from 'react';
import NavigatorComponent from './components/NavigatorComponent';
import './App.css';

class App extends Component {
  // constructor(){
  //   super();

  // }

  render() {

    return (
      <div className="main-App">
<NavigatorComponent />
<div id="cpm"></div>
      </div>
    );
  }
}

export default App;
