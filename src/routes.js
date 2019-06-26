import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from '../../pages/Home';
import Teams from '../../pages/Teams';
import Fixtures from '../../pages/Fixtures';
import Odds from '../../pages/Odds';


const Routes = () => {
  return (<Router>
        <Route exact path="/" component={Home} />
        <Route path="/teams" component={Teams} />
        <Route path="/fixtures" component={Fixtures} />
        <Route path="/odds" component={Odds} />
      </Router>) 
  
}

export default Routes