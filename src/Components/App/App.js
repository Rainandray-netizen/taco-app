import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from '../Header/Header'
import Home from '../Home/Home'
import Chaos from '../Chaos/Chaos'
import CuratedTacos from '../CuratedTacos/CuratedTacos'
import Favorites from '../Favorites/Favorites'

const App = () => (
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