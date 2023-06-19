import React from 'react'

const Book = ({bookInfo}) => {
  return (
    <div className="bookItem">
      {bookInfo.volumeInfo.imageLinks?.thumbnail && 
        <img src={bookInfo.volumeInfo.imageLinks.smallThumbnail} alt={bookInfo.volumeInfo.title}/>}
      <h5>{bookInfo.volumeInfo.title}</h5>
    </div>
  )
}

export default Book
