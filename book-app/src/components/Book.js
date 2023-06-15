import React from 'react'

const Book = ({bookInfo}) => {
  return (
    <>
      <h3>{bookInfo.volumeInfo.title}</h3>
      {bookInfo.volumeInfo.imageLinks?.thumbnail && <img src={bookInfo.volumeInfo.imageLinks.thumbnail} alt={bookInfo.volumeInfo.title}/>}
    </>
  )
}

export default Book
