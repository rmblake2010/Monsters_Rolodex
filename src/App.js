import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters : [],
      searchField: '',
    }
    console.log('constructor')
  }

  //Function runs when app is rendered, API call
  componentDidMount() {
    console.log('component did mount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return{
          monsters: users
        }
      },
      () => {
        //console.log(this.state)
      }
      ))
  }

  //Optimization - Performance, Reducing rendering of anonymous functions
  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    
    // Optimization (More readable)
    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })


    return (
      <div className="App">
          <h1 className='title'>Monster Rolodex</h1>
          <SearchBox className='monster search-box' onChangeHandler={onSearchChange} placeholder='search monsters' />
          <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
