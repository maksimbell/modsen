import React, { useState, useEffect } from 'react'
import { useNavigate, createSearchParams, useSearchParams } from "react-router-dom";
import Book from '@components/Book'
import SearchBar from '@components/SearchBar'
import SearchSelect from '@components/SearchSelect'
import { requestVolume } from '@api/BooksAPI'
// import { requestIpData } from '@api/IpDataAPI'
import * as constants from '@constants'
import { InfinitySpin } from 'react-loader-spinner'
import './style.css';
// import SearchHeader from '@components/SearchHeader';

function Home() {
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)

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
    const params = Object.fromEntries(searchParams)

    if (params.query) {
      setLoading(true)
      searchBooks()

    }
  }, [searchParams])

  function searchBooks() {
    requestVolume(params)
      .then(res => res.json())
      .then(lib => {
        setResult(lib)
      })
  }

  useEffect(() => {
    if (loading)
      setLoading(false)
  }, [result])

  useEffect(() => {
    console.log(params)

    if (result?.totalItems)
      handleParamsChange({ query, ...params })
  }, [params])

  function handleParamsChange(params) {
    navigate({
      pathname: '/',
      search: `${createSearchParams(params)}`,
    })
  }

  function onLoadMore() {
    setLoading(true)
    const params = Object.fromEntries(searchParams)

    requestVolume(params, result.items.length)
      .then(res => res.json())
      .then(lib => {
        console.log(lib)
        setResult({ ...result, items: [...result.items, ...lib.items], })
      })
  }

  const books = result.items?.map((bookInfo, index) => (
    <Book volumeInfo={bookInfo.volumeInfo}
      id={bookInfo.id} key={index} />
  ))

  return (
    <div className="Home">
      <header className="Home-header">
        <SearchBar onChange={handleQueryChange} value={query} handleClick={handleClick} />
        <div className="headerSelects">
          <SearchSelect name={'Categories'} items={constants.CATEGORIES}
            valueId={params.filterId} onChange={handleFilterChange} />
          <SearchSelect name={'Sorting by'} items={constants.SORTINGS}
            valueId={params.sortingId} onChange={handleSortingChange} />
        </div>
      </header>
      <main className="Home-main">
        <div className={`Container` + `${loading ? ' onload' : ''}`}>
          <h3 className="Home-main__results">{result.totalItems !== undefined && `Found ${result?.totalItems} results`}</h3>
          <div className="Home-main__content">
            {books}
          </div>
        </div>
        <div>
          {loading &&
            <InfinitySpin width='200' color="#4fa94d" />}
        </div>
      </main>
      <footer className="Home-footer">
        {result.items &&
          result.items.length !== result.totalItems &&
          <button
            className="Home-footer__button"
            onClick={onLoadMore}>Load more</button>}
      </footer>
    </div >
  );

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
    handleParamsChange({ query, ...params })
  }
}

export default Home;
