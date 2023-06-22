import React from 'react'
import * as constants from '@constants'
import defaultBook from '@assets/default.jpg'
import './style.css';

const Book = ({ volumeInfo, id }) => {
  const { imageLinks, categories, authors, title } = volumeInfo

  return (
    <a href={`book/${id}`} className="bookItem">
      <img
        className="bookItem__img"
        src={imageLinks?.thumbnail ?
          imageLinks?.smallThumbnail : defaultBook}
        alt={title} />
      <h5 className="bookItem__category">{categories?.[0]}</h5>
      <h5 className="bookItem__title">{title?.split(' ')
        .filter((_, index) => index <= constants.MAX_WORDS_TITLE)
        .join(' ')}
      </h5>
      <h5 className="bookItem__author">{authors?.join(', ')}</h5>
    </a>
  )
}

export default Book