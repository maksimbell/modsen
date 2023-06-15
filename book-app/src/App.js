// import logo from './logo.svg';
import './App.css';
import Form from './components/Form.js'

function App() {
  function searchBooks(params){
    console.log(params)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${params.query}&key=AIzaSyBca5LLs3pmiQ1cjNMhqIFoaQaupBS64d0`)
      .then(res => res.json())
      .then(obj => {
        console.log(obj)
      })
  }

  return (
    <div className="App">
      <header>
        <Form searchBooks={searchBooks}/>
      </header>
      <main></main>
    </div>
  );
}

export default App;
