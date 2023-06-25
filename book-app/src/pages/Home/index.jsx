import React, { useState, useEffect } from 'react'
import Book from '@components/Book'
import SearchBar from '@components/SearchBar'
import SearchSelect from '@components/SearchSelect'
import * as constants from '@constants'
import { requestVolume } from '@api/BooksAPI'
import { InfinitySpin } from 'react-loader-spinner'
import './style.css';

function Home() {
  const [result, setResult] = useState([])
  const [filterId, setFilter] = useState(0)
  const [sortingId, setSorting] = useState(0)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('LESS GO!')
  }, [])

  useEffect(() => {
    if (loading)
      setLoading(false)

    console.log(result)

  }, [result])

  useEffect(() => {
    // if (!loading && result.totalItems === 0) {
    //   alert(constants.NO_RESULT_STRING)
    // }
  }, [loading])

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
    setFilter(id)
    setLoading(true)

    requestVolume(id, sortingId)
      .then(res => res.json())
      .then(lib => {
        setResult(lib)
      })
  }

  function handleSortingChange(id) {
    setSorting(id)
    setLoading(true)

    requestVolume(filterId, id)
      .then(res => res.json())
      .then(lib => {
        setResult(lib)
      })
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
          <SearchSelect items={constants.CATEGORIES} onChange={handleFilterChange} />
          <SearchSelect items={constants.SORTINGS} onChange={handleSortingChange} />
        </div>
      </header>
      <main className="Home-main">
        <div className={`Container` + `${loading ? ' onload' : ''}`}>
          <h3 className="Home-main__results">{result.items && `Found ${result?.totalItems} results`}</h3>
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
