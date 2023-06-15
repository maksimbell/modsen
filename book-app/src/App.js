import './App.css';
import React, {useState, useEffect} from 'react'
import Form from './components/Form.js'
import Book from './components/Book.js'

function App() {
  const [result, setResult] = useState([])

  useEffect(() => {
    console.log(result)
  }, [result])

  function searchBooks(params){
    console.log(params)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${params.query}&key=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(obj => {
        console.log(obj)
        setResult(obj.items)
      })
  }

  return (
    <div className="App">
      <header>
        <Form searchBooks={searchBooks}/>
      </header>
      <main>
        {result.map(bookInfo => (
          <Book bookInfo={bookInfo} key={bookInfo.id}/>
        ))}
      </main>
    </div>
  );
}

export default App;
