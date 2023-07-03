import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { requestIpData } from '@api/ipDataAPI'
import ErrorBoundary from '@components/ErrorBoundary'
import BlockedInfo from '@components/BlockedInfo'
import NotFound from '@components/NotFound'
import Header from '@components/Header'
import Home from '@pages/Home'
import About from '@pages/About'
import routeConstants from '@routes';
import appState from './config'
import { checkIpData } from './helpers/ipData'
import { InfinitySpin } from 'react-loader-spinner'
import './App.css'

const {
  SEARCH,
  ABOUT,
  NOTFOUND,
} = routeConstants;

const {
  VERIFY,
  ACCESS,
  BLOCK,
} = appState;

function App() {
  const [state, setState] = useState(VERIFY)

  useEffect(() => {
    setTimeout(handleIpData, 2000)
  }, [])

  function handleIpData() {
    requestIpData()
      .then(res => res.json())
      .then(ipData => {
        if (checkIpData(ipData)) {
          setState(ACCESS)
        } else {
          setState(BLOCK)
        }
      })
  }

  return (
    <div className="App">
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        {(state === VERIFY &&
          <div className="App-spin">
            <InfinitySpin width='200' color="#4fa94d" />
          </div>)
          ||
          (state === ACCESS &&
            <div>
              <Header />
              <Routes>
                <Route exact path={SEARCH.route} element={<Home />} />
                <Route exact path={ABOUT.route} element={<About />} />
                <Route path={NOTFOUND.route} element={<NotFound />} />
              </Routes>
            </div>)
          ||
          (state === BLOCK &&
            <BlockedInfo />)}
      </ErrorBoundary>
    </div>
  )
}

export default App;
