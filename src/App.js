import React from 'react'
import { Helmet } from 'react-helmet'
import { renderRoutes } from 'react-router-config'

import routes from './router'

import './App.css'

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {renderRoutes(routes)}
    </div>
  )
}

export default App
