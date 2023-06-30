import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { requestIpData } from '@api/ipDataAPI'
import ErrorBoundary from '@components/ErrorBoundary'
import BlockedInfo from '@components/BlockedInfo'
import Header from '@components/Header'
import Home from '@pages/Home'
import About from '@pages/About'
import { checkIpData } from './helpers/ipData'
import { State } from './config'
import { InfinitySpin } from 'react-loader-spinner'
import './App.css'

function App() {
  const [state, setState] = useState(State.verify)

  useEffect(() => {
    setTimeout(handleIpData, 2000)
  }, [])

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
            <BlockedInfo />)}
      </ErrorBoundary>
    </div>
  )
}

export default App;
