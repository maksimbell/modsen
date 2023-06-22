import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { requestBook } from '../../api/BooksAPI'
import defaultBook from '../../assets/default.jpg'
import './style.css'

const About = (props) => {
  const {id} = useParams();
  const [book, setBook] = useState({})

  useEffect(() => {
    requestBook(id)
      .then(res => res.json())
      .then(vol => {
        setBook(vol.volumeInfo)
      })
  }, [])

  useEffect(() => {
    console.log(book)
  }, [book])

  return (
    <div className="About">
      <header className="About-header"></header>
      <main className="About-main">
        <img className="About-main__image" 
          src={book.imageLinks?.thumbnail ? 
          book.imageLinks.smallThumbnail : defaultBook} 
          alt={book.title}
          />
        <div className="About-main__content">
          <h5 className="About-main__category">{book?.categories?.join(', ')}</h5>
          <h2 className="About-main__title">{book.title}</h2>
          <h5 className="About-main__author">{book?.authors?.join(', ')}</h5>
          {book?.description ? parse(book?.description) : ''}
        </div>
      </main>
    </div>
  )
}

export default About
