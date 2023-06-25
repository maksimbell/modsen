import React, { useState } from 'react'
import './style.css'

const SearchBar = ({ handleQueryChange, handleClick }) => {

  return (
    <div className="searchBar">
      <h2 className="searchBar__title">Search for books</h2>
      <input
        className="searchBar__input"
        type="search"
        onChange={handleQueryChange}
      />
      <button type="submit" onClick={handleClick}
        className="searchBar__button">Search</button>
    </div>
  )
}

export default SearchBar
