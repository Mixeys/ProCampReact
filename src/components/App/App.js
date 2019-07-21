import React, { Fragment } from 'react'
import { Router } from '@reach/router'

import './App.scss'

import Header from '../Header/Header'
import Home from '../../pages/Home'
import Teams from '../../pages/Teams'
import Team from '../../pages/Team'
import Fixtures from '../../pages/Fixtures'
import Odds from '../../pages/Odds'

const App = () => {
  return (
    <Fragment>
      <Header />
      <Router>
        <Home path="/" />
        <Teams path="teams" />
        <Team path="teams/:id" />
        <Fixtures path="fixtures" />
        <Odds path="odds" />
      </Router>
    </Fragment>
  )
}

export default App
