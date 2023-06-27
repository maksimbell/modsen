import React, { useState, useEffect } from 'react'
import { useNavigate, createSearchParams, useSearchParams } from "react-router-dom";
import SearchBar from '@components/SearchBar'
import SearchSelect from '@components/SearchSelect'
import * as constants from '@constants'
import './style.css';

const Header = () => {
  const [query, setQuery] = useState('')
  const [params, setParams] = useState({
    filterId: 0,
    sortingId: 0,
  })

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const params = Object.fromEntries(searchParams)

    if (params.query) {
      setQuery(params.query)
      setParams({
        filterId: +params.filterId,
        sortingId: +params.sortingId
      })
    }
  }, [])

  useEffect(() => {
    console.log(query)
  }, [query])

  useEffect(() => {
    console.log(params)

    if (query)
      handleParamsChange({ query, ...params })
  }, [params])

  function handleParamsChange(params) {
    navigate({
      pathname: '/',
      search: `${createSearchParams(params)}`,
    })
  }

  return (
    <header className="Home-header">
      <SearchBar onChange={handleQueryChange} value={query} handleClick={handleClick} />
      <div className="headerSelects">
        <SearchSelect name={'Categories'} items={constants.CATEGORIES}
          valueId={params.filterId} onChange={handleFilterChange} />
        <SearchSelect name={'Sorting by'} items={constants.SORTINGS}
          valueId={params.sortingId} onChange={handleSortingChange} />
      </div>
    </header>
  )

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
    if (query)
      handleParamsChange({ query, ...params })
  }
}

export default Header
