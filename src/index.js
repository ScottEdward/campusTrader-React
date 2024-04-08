import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Mission from './views/mission'
import Listings1 from './views/listings1'
import Login from './views/login'
import Listings from './views/listings'
import Home from './views/home'
import UploadNew from './views/upload-new'
import Faq from './views/faq'
import MyListings from './views/my-listings'
import MyOffers from './views/my-offers'
import Reports from './views/reports'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Mission} exact path="/mission" />
        <Route component={Listings1} exact path="/listings1" />
        <Route component={Login} exact path="/login" />
        <Route component={Listings} exact path="/listings" />
        <Route component={Home} exact path="/" />
        <Route component={UploadNew} exact path="/upload-new" />
        <Route component={Faq} exact path="/faq" />
        <Route component={MyListings} exact path="/my-listings" />
        <Route component={MyOffers} exact path="/my-offers" />
        <Route component={Reports} exact path="/reports" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
