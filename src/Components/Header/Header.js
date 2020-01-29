import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"

const Header = () =>{
  return(
    <header>
      <Link to="/">Home</Link>
      {" "}
      <Link to="/taco-chaos">Taco Chaos</Link>
      {" "}
      <Link to="/curated-tacos">Curated Tacos</Link>
      {" "}
      <Link to="/favorites">Favorites</Link>
    </header>
  )
}

export default Header