import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.scss'

import Header from '../Header/Header'
import Home from '../../pages/Home'
import Teams from '../../pages/Teams'
import Fixtures from '../../pages/Fixtures'
import Odds from '../../pages/Odds'

const App = () => {
  return (
    <Fragment>
      <Router>
        <Fragment>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/teams" component={Teams} />
          <Route path="/fixtures" component={Fixtures} />
          <Route path="/odds" component={Odds} />
        </Fragment>
      </Router>
    </Fragment>
  )
}

export default App
