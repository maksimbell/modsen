import React from 'react'
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from '@components/ErrorBoundary'
import Header from '@components/Header'
import Home from '@pages/Home'
import About from '@pages/About'

function App() {

  // const [ipVerified, setIpVerified] = useState(false)
  // const [hasAccess, setAccess] = useState(false)

  // if(!ipVerified)

  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/books/:id" element={<About />} />
      </Routes>
      {/* {hasAccess ? <RouterProvider router={router} /> : <p>No access</p>} */}
    </ErrorBoundary>
  )
}

export default App;
