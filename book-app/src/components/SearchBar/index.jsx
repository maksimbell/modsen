import React, { useState } from 'react'
import './style.css'

const SearchBar = ({ onChange, value, handleClick }) => {

  return (
    <div className="searchBar">
      <h2 className="searchBar__title">Search for books</h2>
      <input
        className="searchBar__input"
        type="search"
        value={value}
        onChange={onChange}
      />
      <button type="submit" onClick={handleClick}
        className="searchBar__button">Search</button>
    </div>
  )
}

export default SearchBar
