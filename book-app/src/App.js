// import logo from './logo.svg';
import './App.css';
import Form from './components/Form.js'

function App() {
  function searchBooks(params){
    console.log(params)
  }

  return (
    <div className="App">
      <Form searchBooks={searchBooks}/>
    </div>
  );
}

export default App;
