/* import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CurrencyContainer from './components/CurrencyContainer/CurrencyContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CurrencyContainer/>
      </div>
    );
  }
}

export default App; */


import React from 'react'
import Header from './Header'
import Main from './Main'



const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App
