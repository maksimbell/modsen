import React, { useState, useEffect } from 'react'
import SearchBar from '@components/SearchBar'
import SearchSelect from '@components/SearchSelect'
import * as constants from '@constants'
import './style.css';

const SearchHeader = ({ searchBooks }) => {
  const [params, setParams] = useState({
    text: '',
    filterId: 0,
    sortingId: 0,
  })

  useEffect(() => {
    if (params.text) {
      searchBooks(params)
      console.log(params)
    }
  }, [params])

  function handleFilterChange(id) {
    setParams({ filterId: id, ...params })
  }

  function handleSortingChange(id) {
    setParams({ sortingId: id, ...params })
  }

  function handleQueryChange(e) {
    console.log(e.target.value)
    setParams({ text: e.target.value, ...params })
  }

  return (
    <header className="Home-header">
      <SearchBar onChange={handleQueryChange} handleClick={searchBooks} />
      <div className="headerSelects">
        <SearchSelect name={'Categories'} items={constants.CATEGORIES} onChange={handleFilterChange} />
        <SearchSelect name={'Sorting by'} items={constants.SORTINGS} onChange={handleSortingChange} />
      </div>
    </header>
  )
}

export default SearchHeader
