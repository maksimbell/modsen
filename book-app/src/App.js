import './App.css';
import React, {useState, useEffect} from 'react'
import Book from './components/Book'
import SearchBar from './components/SearchBar'
import CatergoryFilter from './components/CategoryFilter'
import SortSelect from './components/SortSelect'
import * as constants from './constants'

function App() {
  const [result, setResult] = useState([])
  const [filter, setFilter] = useState(0)
  const [sorting, setSorting] = useState(0)

  useEffect(() => {
    console.log(result)
  }, [result])

  function searchBooks(query){
    console.log(query)
    fetch(`${constants.API_URL}?q=${query}&key=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(lib => {
        console.log(lib)
        setResult(lib.items)
      })
  }

  function handleFilterChange(id){
    console.log('id:', id)
    setFilter(id)
  }

  function handleSortingChange(id){
    console.log('id:', id)
    setSorting(id)
  }

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar searchBooks={searchBooks}/>
        <div className="headerSelects">
          <CatergoryFilter categories={constants.CATEGORIES} onChange={handleFilterChange}/>
          <SortSelect sortings={constants.SORTINGS} onChange={handleSortingChange}/>
        </div>
      </header>
      <main className="App-main">
        {result.map(bookInfo => (
          <Book bookInfo={bookInfo} key={bookInfo.id}/>
        ))}
      </main>
    </div>
  );
}

export default App;
