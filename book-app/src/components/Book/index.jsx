import React from 'react'
import { Link } from "react-router-dom";
import * as constants from '@constants'
import defaultBook from '@assets/default.jpg'
import './style.css';

const Book = ({ volumeInfo, id }) => {
  const { imageLinks, categories, authors, title } = volumeInfo
  const { smallThumbnail } = imageLinks || {}

  const bookCategory = categories?.[0]
  const bookTitle = title?.split(' ')
    .filter((_, index) => index <= constants.MAX_WORDS_TITLE)
    .join(' ')
  const bookAuthors = authors?.join(', ')

  return (
    <Link to={`books/${id}`} className="bookItem">
      <img
        className="bookItem__img"
        src={smallThumbnail ? smallThumbnail : defaultBook}
        alt={title} />
      <h5 className="bookItem__category">{bookCategory}</h5>
      <h5 className="bookItem__title">{bookTitle}</h5>
      <h5 className="bookItem__author">{bookAuthors}</h5>
    </Link>
  )
}

export default Book
