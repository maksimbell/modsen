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

    request(filterId, sortingId, constants.DEFAULT_START_INDEX, 
      constants.DEFAULT_MAX_RESULTS, query)
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

    request(filterId, id)
      .then(res => res.json())
      .then(lib => {
        setResult(lib)
      })
  }

  function onLoadMore(){
    request(filterId, sortingId, result.items.length, constants.DEFAULT_MAX_RESULTS)
      .then(res => res.json())
      .then(lib => {
        console.log(lib)
        setResult({...result, items: [...result.items, ...lib.items], })
      })
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
        <div className="Container">
          <h3 className="App-main__results">{result.items && `Found ${result?.totalItems} results`}</h3>
          <div className="App-main__content">
            {result.items?.map((bookInfo, index) => (
              <Book volumeInfo={bookInfo.volumeInfo} key={index}/>
            ))}
          </div>
          {result.items && <button onClick={onLoadMore}>Load more</button>}
        </div>
      </main>
    </div>
  );
}

export default App;
