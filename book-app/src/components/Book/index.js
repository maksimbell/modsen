import React from 'react'
import defaultBook from '../../assets/default.jpg'

const Book = ({volumeInfo}) => {
  
  return (
    <div className="bookItem">
      <img src={volumeInfo.imageLinks?.thumbnail ? 
        volumeInfo.imageLinks.smallThumbnail : defaultBook} 
        alt={volumeInfo.title}/>
      <h5>{volumeInfo.title}</h5>
    </div>
  )
}

export default Book
