import './App.css';
import React, {useState, useEffect} from 'react'
import Book from './components/Book'
import SearchBar from './components/SearchBar'
import CatergoryFilter from './components/CategoryFilter'
import SortSelect from './components/SortSelect'
import * as constants from './constants'
import request from './api/BooksAPI'

function App() {
  const [result, setResult] = useState([])
  const [filterId, setFilter] = useState(0)
  const [sortingId, setSorting] = useState(0)

  useEffect(() => {
    console.log(result)
  }, [result])

  // useEffect(() => {
  //   if(query)
  //     request
  // }, [filterId, sortingId])

  function searchBooks(query){
    console.log(query)

    request(filterId, sortingId, query)
      .then(res => res.json())
      .then(lib => {
        setResult(lib)
      })
  }

  function handleFilterChange(id){
    console.log('id:', id)
    setFilter(id)

    request(id, sortingId)
      .then(res => res.json())
      .then(lib => {
        setResult(lib)
      })
  }

  function handleSortingChange(id){
    console.log('id:', id)
    setSorting(id)

    request(id, sortingId)
      .then(res => res.json())
      .then(lib => {
        setResult(lib)
      })
  }

  function loadMore(){
    console.log(1)
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
        <h3>{result.items && `Found ${result?.totalItems} results`}</h3>
        {result.items?.map((bookInfo, index) => (
          <Book bookInfo={bookInfo} key={index}/>
        ))}
        <button onClick={loadMore}>Load more</button>
      </main>
    </div>
  );
}

export default App;
