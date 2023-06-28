import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { requestIpData } from '@api/IpDataAPI'
import ErrorBoundary from '@components/ErrorBoundary'
import Header from '@components/Header'
import Home from '@pages/Home'
import About from '@pages/About'
import { checkIpData } from './utils/IpData'
import { State } from '@constants'
import { InfinitySpin } from 'react-loader-spinner'
import './App.css'

function App() {
  const [state, setState] = useState(State.verify)

  useEffect(() => {
    setTimeout(handleIpData, 2000)
  }, [])

  useEffect(() => {
    console.log(state)
  }, [state])

  function handleIpData() {
    requestIpData()
      .then(res => res.json())
      .then(ipData => {
        if (checkIpData(ipData)) {
          setState(State.access)
        } else {
          setState(State.block)
        }
      })
  }

  return (
    <div className="App">
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        {(state === State.verify &&
          <div className="App-spin">
            <InfinitySpin width='200' color="#4fa94d" />
          </div>)
          ||
          (state === State.access &&
            <div>
              <Header />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/books/:id" element={<About />} />
              </Routes>
            </div>)
          ||
          (state === State.block &&
            <p>Blocked</p>)}
      </ErrorBoundary>
    </div>
  )
}

export default App;
