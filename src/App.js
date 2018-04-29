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


import React, { Component } from 'react';
import './css/App.css';
import logo from './logo.svg';
import List from './components/List';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    
      this.setState({ term: event.target.value });
 
    
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form className="App" onSubmit={this.onSubmit}>
          <input id='inputDo' value={this.state.term} onChange={this.onChange} />
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}
