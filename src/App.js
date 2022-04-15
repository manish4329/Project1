import React from "react";
import { About } from "./components/About";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Terms } from "./components/Terms";
import { Privacy } from "./components/Privacy";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
export const App = () => {
  
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
