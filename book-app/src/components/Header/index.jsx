import React, { useState, useEffect } from 'react'
import { useNavigate, createSearchParams, useSearchParams } from "react-router-dom";
import SearchBar from '@components/SearchBar'
import SearchSelect from '@components/SearchSelect'
import * as constants from '@constants'
import routeConstants from '@routes';
import './style.css';

const {
  SEARCH,
} = routeConstants;

const Header = () => {
  const [query, setQuery] = useState('')
  const [filterId, setFilter] = useState(0)
  const [sortingId, setSort] = useState(0)

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const params = Object.fromEntries(searchParams)

    if (params.query) {
      setQuery(params.query)
      setFilter(+params.filterId)
      setSort(+params.sortingId)
    }
  }, [searchParams])

  function handleParamsChange(params) {

    navigate({
      pathname: SEARCH.route,
      search: `${createSearchParams(params)}`,
    })
  }

  function handleFilterChange(id) {
    setFilter(id)
    if (query)
      handleParamsChange({ query, filterId: id, sortingId })
  }

  function handleSortingChange(id) {
    setSort(id)
    if (query)
      handleParamsChange({ query, filterId, sortingId: id })
  }

  function handleQueryChange(e) {
    setQuery(e.target.value)
  }

  function handleClick() {
    if (query)
      handleParamsChange({ query, filterId, sortingId })
  }

  return (
    <header className="Home-header">
      <SearchBar onChange={handleQueryChange} value={query} handleClick={handleClick} />
      <div className="headerSelects">
        <SearchSelect name={'Categories'} items={constants.CATEGORIES}
          valueId={filterId} onChange={handleFilterChange} />
        <SearchSelect name={'Sorting by'} items={constants.SORTINGS}
          valueId={sortingId} onChange={handleSortingChange} />
      </div>
    </header>
  )
}

export default Header
