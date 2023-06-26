import React, { Routes, Route } from 'react-router-dom';
import ErrorBoundary from '@components/ErrorBoundary'
import Home from '@pages/Home'
import About from '@pages/About'

function App() {
  return (
    <>
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<About />} />
        </Routes>
      </ErrorBoundary>
    </>
  )
}

export default App;
