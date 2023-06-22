import React, { useState } from 'react'
import './style.css'

const SearchBar = ({ searchBooks }) => {
  const [query, setQuery] = useState('')

  const handleQueryChange = (event) => setQuery(event.target.value)
  const handleClick = (event) => {
    if (query)
      searchBooks(query)
  }

  return (
    <div className="searchBar">
      <h2 className="searchBar__title">Search for books</h2>
      <input
        className="searchBar__input"
        type="search"
        onChange={handleQueryChange}
        value={query}
      />
      <button type="submit" onClick={handleClick}
        className="searchBar__button">Search</button>
    </div>
  )
}

export default SearchBar
