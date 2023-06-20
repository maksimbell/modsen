import React from 'react'
import * as constants from '../../constants'
import defaultBook from '../../assets/default.jpg'
import './style.css';

const Book = ({volumeInfo}) => {
  
  return (
    <div className="bookItem">
      <img src={volumeInfo.imageLinks?.thumbnail ? 
        volumeInfo.imageLinks.smallThumbnail : defaultBook} 
        alt={volumeInfo.title}
        className="bookItem__img"/>
      <h5 className="bookItem__category">{volumeInfo?.categories?.[0]}</h5>
      <h5 className="bookItem__title">{volumeInfo.title.split(' ')
        .filter((_, index) => index <= constants.MAX_WORDS_TITLE)
        .join(' ')}
      </h5>
      <h5 className="bookItem__author">{volumeInfo?.authors?.join(', ')}</h5>
    </div>
  )
}

export default Book
