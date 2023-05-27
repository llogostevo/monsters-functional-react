import {Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      name: {firstname: "Luke", lastname:"skywalker" },
      company: "Freelance",
      role: "Developer"
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name.firstname} {this.state.name.lastname}, I work as a {this.state.role} at {this.state.company}</p>
          <button onClick={() => {
            this.setState( 
              () =>{
                return {
              name: {firstname: 'Andrei', lastname:"the Giant"},
            };
          },
          // this will run after the code above will run
          () => {
            console.log(this.state)
          }
          );
          }}
          >Change Name</button>
        </header>
      </div>
    );
}

  
}

export default App;
