import {Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
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
    const filteredMonsters = this.state.monsters.filter((monster)=>{ return monster.name.toLowerCase().includes(this.state.searchField) })


    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={(event) =>{
          // console.log(event.target.value)
          const searchField = event.target.value;
          
          this.setState(()=>{
            return {searchField}
          })
          }} />

        {filteredMonsters.map((monster) => {
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
