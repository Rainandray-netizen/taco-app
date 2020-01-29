import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom"
import Header from "../Header/Header.js"
import Home from "../Home/Home.js"
import Chaos from "../Chaos/Chaos.js"
import CuratedTacos from "../CuratedTacos/CuratedTacos.js"
import Favorites from "../Favorites/Favorites.js"
import CssBaseline from '@material-ui/core/CssBaseline'

const App = () =>(
  <div>
    <CssBaseline />
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/taco-chaos">
          <Chaos />
        </Route>
        <Route path="/curated-tacos">
          <CuratedTacos />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </Router>
  </div>
)

export default App