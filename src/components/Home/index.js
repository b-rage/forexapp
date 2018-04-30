import React, { Component } from 'react';
import '../../css/App.css';
import List from '../List';


class Home extends Component {
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
        console.log(this.state.term);
      }
    
      onClick = (event) => {
        this.state.items.pop();
        console.log(this.state.items);
        
      } 
    
    render() {
        return (
          <div className='Home'>
             <div class="input-field col s12">  
                <form className="App" onSubmit={this.onSubmit}>
                <input id='inputDo' value={this.state.term} onChange={this.onChange} />
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                </form>
            </div>
            <List items={this.state.items} />
            <button id='deleteBtn' className="btn waves-effect waves-light" onClick={this.onClick}>Delete</button>
          </div>

        )
    }
}

export default Home;