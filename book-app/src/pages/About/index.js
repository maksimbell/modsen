import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {requestBook} from '../../api/BooksAPI'
import defaultBook from '../../assets/default.jpg'

const About = (props) => {
  const {id} = useParams();
  const [book, setBook] = useState({})

  useEffect(() => {
    requestBook(id)
      .then(res => res.json())
      .then(vol => {
        setBook(vol.volumeInfo)
      })
  },)

  useEffect(() => {
    console.log(book)
  }, [book])

  return (
    <div className="About">
      <header className="About-header"></header>
      <main className="About-main">
        <img src={book.imageLinks?.thumbnail ? 
          book.imageLinks.smallThumbnail : defaultBook} 
          alt={book.title}
          className="bookItem__img"/>
        <h5 className="bookItem__category">{book?.categories?.[0]}</h5>
        <h5 className="bookItem__title">{book.title}
        </h5>
        <h5 className="bookItem__author">{book?.authors?.join(', ')}</h5>
      </main>
    </div>
  )
}

export default About
