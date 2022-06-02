import { Component } from 'react';

import CardList from './components/cards-list/cards-list.components'
import SearchBox from './components/search-box/search-box.components'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }
   // ComponentDidMount is method itself and its Mounts once the our app is loaded and it only reMount
   // completely once we did totally remove it from the DOM.
  componentDidMount() {
    console.log('componentDidMount')
    // Using the native fetch()
    fetch('https://jsonplaceholder.typicode.com/users')
    // Once we fetch this - this is going to be a promise. and promise is asynchronous in JavaScript
    .then((response) => response.json()) // Every .then will return a promise that resolves
    .then((users) => this.setState(() => {
        return {monsters: users}
    }
    ));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField }
    })
  }


  render() {
    
    // I did use the destructuring in order to make code much shorter since this what ES6 gives huge benefits in
    // making my code shorter 
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
   });

    return(
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
          className='monsters-search-box'
          onChangeHandler={onSearchChange}
          placeholder='search monsters'
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;


/*
Now am going to start with the functionality of my app as I want to create a search box that's 
filters whatever keyword is selected to look for what I did fetch from the API place holder
*/
