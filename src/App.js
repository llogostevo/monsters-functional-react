import {Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
    }
  }

  // mounting is the first time a component gets loaded to the dom
  // https://swapi.dev/api/people/
  // https://jsonplaceholder.typicode.com/users
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(()=>{
        return {monsters:users}
      },
      () =>{ console.log(this.state);
      })
      )
  }
  
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return (
            <div key={monster.id}>
              <h1>I am a monster called {monster.name}</h1>
              <ul>
                <li>
                  {monster.address.street}
                </li>
                <li>
                  {monster.website}
                </li>
                <li>
                  {monster.email}
                </li>
              </ul>


             </div>
            )
          })
        }
      </div>
    );
}

  
}

export default App;
