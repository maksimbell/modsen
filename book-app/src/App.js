// import logo from './logo.svg';
import './App.css';
import Form from './components/Form.js'

function App() {
  function searchBooks(params){
    console.log(params)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${params.query}&key=${key}`)
      .then(res => res.json())
      .then(obj => {
        console.log(obj)
      })
  }

  return (
    <div className="App">
      <Form searchBooks={searchBooks}/>
    </div>
  );
}

export default App;
