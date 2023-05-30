import {useEffect, useState} from 'react'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';


const App = () =>{
  console.log('render');
  // setting a new state so that if it changes the state will change
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters]= useState([]);
  const [filteredMonsters, setFilteredMonsters]= useState(monsters);


// use effect to track changes to the monster or search field
  useEffect(()=>{
    // set value of the search field to be the new filtered monster
    const newFilteredMonsters = monsters.filter((monster)=>{ return monster.name.toLowerCase().includes(searchField) })
    // filter out the monsters list using the string
    setFilteredMonsters(newFilteredMonsters);
    // check if the initial state of either monsters or search field changes
  }, [monsters, searchField]);

  // initialise the user data
  useEffect(()=>{
    console.log("effect fired");
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        // promise to set the monsters array to contain the users from the json pull
        // note that users on the LHS is the link to the website, users on the RHS is the location in memory so they are not equal, this is why you need the useEffect
        .then((users) => setMonsters(users))
  },[]);

  console.log('render')

  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return ( 
  <div className="App">
    <h1 className="app-title">Monsters Directory</h1>

  <SearchBox 
    className='search-box'
    onChangeHandler={onSearchChange} 
    placeholder='Search Monsters'
  />

  <CardList monsters={filteredMonsters}
  
  />
</div>
);

};

// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',

//     }
//   }

//   // mounting is the first time a component gets loaded to the dom
//   // https://swapi.dev/api/people/
//   // https://jsonplaceholder.typicode.com/users
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((users) => this.setState(()=>{
//         return {monsters:users}
//       },
//       () =>{ console.log(this.state);
//       })
//       )
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
    
//     this.setState(()=>{
//       return {searchField}
//     })
//     }


//   render() {

//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;

//     const filteredMonsters = monsters.filter((monster)=>{ return monster.name.toLowerCase().includes(searchField) })

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Directory</h1>
//         <SearchBox 
//           className='search-box'
//           onChangeHandler={onSearchChange} 
//           placeholder='Search Monsters'
//         />

//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
// }

  
//  }

export default App;
