import React from 'react'
import About from "./about.js"
import AboutProduct from "./AboutProduct.js"
import Home from "./Home.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Link to="/about">About</Link>
      {" "} 
      <Link to="/about/pills">About Pills</Link>
      {" "}
      <Link to="/">Home</Link>
    </div>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
      <Route path="/about/:productName" exact>
        <AboutProduct />
      </Route>
      <Route path="/home">
        <Redirect to="/" />
      </Route>
    </Switch>
  </Router>
)

export default App