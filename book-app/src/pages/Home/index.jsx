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
  const [filterId, setFilter] = useState(0)
  const [sortingId, setSorting] = useState(0)

  const [loading, setLoading] = useState(false)

  useEffect(() => {

    // requestIpData()
    //   .then(res => res.json())
    //   .then(ipData => {
    //     console.log(ipData)
    //   })
  }, [])

  useEffect(() => {
    if (loading)
      setLoading(false)

    console.log(result)

  }, [result])

  useEffect(() => {
    
    requestVolume(filterId, sortingId)
      .then(res => res.json())
      .then(lib => {
        setResult(lib)
      })
  }, [filterId, sortingId])

  function searchBooks(query) {
    console.log(query)
    setLoading(true)

    requestVolume(filterId, sortingId, constants.DEFAULT_START_INDEX,
      constants.DEFAULT_MAX_RESULTS, query)
      .then(res => res.json())
      .then(lib => {
        setResult(lib)
      })
  }

  function handleFilterChange(id) {
    setLoading(true)
    setFilter(id)
  }

  function handleSortingChange(id) {
    setLoading(true)
    setSorting(id)
  }

  function onLoadMore() {
    setLoading(true)

    requestVolume(filterId, sortingId, result.items.length, constants.DEFAULT_MAX_RESULTS)
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
        <SearchBar searchBooks={searchBooks} />
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
          <button
            className="Home-footer__button"
            onClick={onLoadMore}>Load more</button>}
      </footer>
    </div>
  );
}

export default Home;
