import React from 'react'
import { About } from './components/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Terms } from './components/Terms';
import { Privacy } from './components/Privacy';
import { Home } from './components/Home';


export const App = () => {
  return (
    <>
    <Router>
    <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Terms">
            <Terms />
          </Route>
          <Route path="/Privacy">
            <Privacy />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
    </Switch>
    </Router>
    
    </>
  )
}
