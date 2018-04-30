import React from 'react'
import { Link } from 'react-router-dom'
import '../css/App.css';
import logo from '../logo.svg';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/ListPage'>ListPage</Link></li>
        <li><Link to='/CurrencyContainer'>Currency</Link></li>
      </ul>
    </nav>
  </div>
)

export default Header