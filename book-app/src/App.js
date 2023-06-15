import './App.css';
import React, {useState, useEffect} from 'react'
import Book from './components/Book.js'
import SearchBar from './components/SearchBar.js'
import CatergoryFilter from './components/CategoryFilter.js'
import SortSelect from './components/SortSelect.js'

const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']
const sortings = ['relevance', 'newest']

function App() {
  const [result, setResult] = useState([])
  const [filter, setFilter] = useState(0)
  const [sorting, setSorting] = useState(0)

  useEffect(() => {
    console.log(result)
  }, [result])

  function searchBooks(query){
    console.log(query)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(obj => {
        console.log(obj)
        setResult(obj.items)
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
          <CatergoryFilter categories={categories} onChange={handleFilterChange}/>
          <SortSelect sortings={sortings} onChange={handleSortingChange}/>
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
