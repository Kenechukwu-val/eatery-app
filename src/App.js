import React, { Component } from 'react';
import './App.css';
import Navbar from './components/header/header'
import Body from './components/body/body'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
          <Body />
      </div>
    );
  }
}

export default App;
