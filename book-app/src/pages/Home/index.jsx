import React, { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom";
import Book from '@components/Book'
import { requestVolume } from '@api/BooksAPI'
import { InfinitySpin } from 'react-loader-spinner'
import './style.css';

function Home() {
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const params = Object.fromEntries(searchParams)
    console.log(params)

    if (params.query) {
      setLoading(true)
      searchBooks(params)

    }
  }, [searchParams])

  function searchBooks(params) {
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
      <main className="Home-main">
        <div className={`Container`.concat(`${loading ? ' onload' : ''}`)}>
          {result.totalItems !== undefined &&
            <h3 className="Home-main__results">{`Found ${result?.totalItems} results`}</h3>}
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
}

export default Home;
