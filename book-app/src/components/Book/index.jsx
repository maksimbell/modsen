import React from 'react'
import { Link } from "react-router-dom";
import * as constants from '@constants'
import defaultBook from '@assets/default.jpg'
import './style.css';

const Book = ({ volumeInfo, id }) => {
  const { imageLinks, categories, authors, title } = volumeInfo
  const { thumbnail, smallThumbnail } = imageLinks

  return (
    <Link to={`books/${id}`} className="bookItem">
      <img
        className="bookItem__img"
        src={thumbnail ? smallThumbnail : defaultBook}
        alt={title} />
      <h5 className="bookItem__category">{categories?.[0]}</h5>
      <h5 className="bookItem__title">{title?.split(' ')
        .filter((_, index) => index <= constants.MAX_WORDS_TITLE)
        .join(' ')}
      </h5>
      <h5 className="bookItem__author">{authors?.join(', ')}</h5>
    </Link>
  )
}

export default Book
