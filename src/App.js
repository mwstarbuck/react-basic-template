import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Template } from './components/Template'

class App extends Component {

  constructor() {
    super()

  }
  render() {
    return (
      <div className="App">
        <Template></Template>
      </div>
    );
  }
}

export default App;
