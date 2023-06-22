import { Routes, Route } from 'react-router-dom';
import Home from '@pages/Home'
import About from '@pages/About'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<About />} />
      </Routes>
    </>
  )
}

export default App;
