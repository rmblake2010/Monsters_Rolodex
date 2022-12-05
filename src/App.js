import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';



const App = () => {
  console.log('render')
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  // API Call
  useEffect(() => {
    console.log('effect fired')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users))
  }, [])

  //Prevents reloading of function on re-render
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  // Search Handler
  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }


  return(
  <div className="App">
    <h1 className='title'>Monster Rolodex</h1>
    <SearchBox 
    className='monster search-box' 
    onChangeHandler={onSearchChange} 
    placeholder='search monsters' 
    />
    <CardList monsters={filteredMonsters} />
  </div>
  )
}


export default App;
 

