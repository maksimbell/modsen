import React, { useState, useEffect } from 'react'
import SearchBar from '@components/SearchBar'
import SearchSelect from '@components/SearchSelect'
import * as constants from '@constants'
import './style.css';

const SearchHeader = ({ onParamsChange, hasResult }) => {
  const [query, setQuery] = useState('')
  const [params, setParams] = useState({
    filterId: 0,
    sortingId: 0,
  })

  useEffect(() => {
    console.log(query)
  }, [query])

  useEffect(() => {
    console.log(params)

    if (hasResult)
      onParamsChange({ query, ...params })
  }, [params])

  function handleFilterChange(id) {
    setParams({ ...params, filterId: id })
  }

  function handleSortingChange(id) {
    setParams({ ...params, sortingId: id })
  }

  function handleQueryChange(e) {
    setQuery(e.target.value)
  }

  function handleClick() {
    onParamsChange({ query, ...params })
  }

  return (
    <header className="Home-header">
      <SearchBar onChange={handleQueryChange} handleClick={handleClick} />
      <div className="headerSelects">
        <SearchSelect name={'Categories'} items={constants.CATEGORIES} onChange={handleFilterChange} />
        <SearchSelect name={'Sorting by'} items={constants.SORTINGS} onChange={handleSortingChange} />
      </div>
    </header>
  )
}

export default SearchHeader
