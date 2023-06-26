import React, { useState, useEffect } from 'react'
import Book from '@components/Book'
import SearchHeader from '@components/SearchHeader'
import * as constants from '@constants'
import { requestVolume } from '@api/BooksAPI'
import { requestIpData } from '@api/IpDataAPI'
import { InfinitySpin } from 'react-loader-spinner'
import './style.css';

function Home() {
  const [result, setResult] = useState([])
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

  function searchBooks(query, params) {
    setLoading(true)

    console.log('Search here')
    if (query)
      requestVolume(constants.DEFAULT_START_INDEX, params, query)
        .then(res => res.json())
        .then(lib => {
          setResult(lib)
        })
  }

  function onLoadMore() {
    setLoading(true)

    // requestVolume(result.items.length)
    //   .then(res => res.json())
    //   .then(lib => {
    //     console.log(lib)
    //     setResult({ ...result, items: [...result.items, ...lib.items], })
    //   })
  }

  const books = result.items?.map((bookInfo, index) => (
    <Book volumeInfo={bookInfo.volumeInfo}
      id={bookInfo.id} key={index} />
  ))

  return (
    <div className="Home">
      <SearchHeader searchBooks={searchBooks} />
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
