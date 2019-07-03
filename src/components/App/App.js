import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.scss'

import Header from '../Header/Header'
import Home from '../../pages/Home'
import Teams from '../../pages/Teams'
import Team from '../../pages/Team'
import Fixtures from '../../pages/Fixtures'
import Odds from '../../pages/Odds'

const App = () => {
  return (
      <Router>
        <Fragment>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/teams" component={Teams} />
          <Route path="/teams/:id" component={Team} />
          <Route path="/fixtures" component={Fixtures} />
          <Route path="/odds" component={Odds} />
        </Fragment>
      </Router>
  )
}

export default App
