import React, { useState, useEffect } from 'react'
import Book from '@components/Book'
import SearchBar from '@components/SearchBar'
import SearchSelect from '@components/SearchSelect'
import * as constants from '@constants'
import { requestVolume } from '@api/BooksAPI'
import { requestIpData } from '@api/IpDataAPI'
import { InfinitySpin } from 'react-loader-spinner'
import './style.css';

function Home() {
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)

  const [query, setQuery] = useState('')
  const [params, setParams] = useState({
    filterId: 0,
    sortingId: 0,
  })

  useEffect(() => {

    requestIpData()
      .then(res => res.json())
      .then(ipData => {
        console.log(ipData)
      })
  }, [])

  useEffect(() => {
    if (loading)
      setLoading(false)

    console.log(result)

  }, [result])

  useEffect(() => {
    console.log(params)
    if (query) {
      searchBooks(query, params)
    }
  }, [params])

  function handleFilterChange(id) {
    console.log(id)
    setParams({ ...params, filterId: id })
  }

  function handleSortingChange(id) {
    console.log(id)
    setParams({ ...params, sortingId: id })
  }

  function handleQueryChange(e) {
    setQuery(e.target.value)
  }

  function searchBooks() {
    setLoading(true)
    console.log(121)
    console.log(query, params)

    if (query)
      requestVolume(query, params)
        .then(res => res.json())
        .then(lib => {
          setResult(lib)
        })
  }

  function onLoadMore() {
    setLoading(true)

    requestVolume(query, params, result.items.length)
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
        <SearchBar onChange={handleQueryChange} handleClick={searchBooks} />
        <div className="headerSelects">
          <SearchSelect name={'Categories'} items={constants.CATEGORIES} onChange={handleFilterChange} />
          <SearchSelect name={'Sorting by'} items={constants.SORTINGS} onChange={handleSortingChange} />
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
            <InfinitySpin
              width='200'
              color="#4fa94d"
            />}
        </div>
      </main>
      <footer className="Home-footer">
        {result.items &&
          result.items.length !== result.totalItems &&
          < button
            className="Home-footer__button"
            onClick={onLoadMore}>Load more</button>}
      </footer>
    </div >
  );
}

export default Home;
