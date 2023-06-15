import React from 'react'

const Book = ({bookInfo}) => {
  return (
    <>
        <h1>{bookInfo.volumeInfo.title}</h1>
        {bookInfo.volumeInfo?.imageLinks?.thumbnail && 
            <img src={bookInfo.volumeInfo.imageLinks.thumbnail} alt={bookInfo.volumeInfo.title}/>}
    </>
  )
}

export default Book
