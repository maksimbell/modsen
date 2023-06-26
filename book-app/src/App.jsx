import React from 'react'
import { Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorBoundary from '@components/ErrorBoundary'
import Home from '@pages/Home'
import About from '@pages/About'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/books/:id",
    element: <About />,
  }
]);

function App() {
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  )
}

export default App;
