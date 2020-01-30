import React from 'react'
import {
  BrowserRouter as Link,
} from 'react-router-dom'
// import Button from '@material-ui/core/button'

const Header = () => (
  <header>
    <Link to="/">Home</Link>
    {' '}
    <Link to="/taco-chaos">Taco Chaos</Link>
    {' '}
    <Link to="/curated-tacos">Curated Tacos</Link>
    {' '}
    <Link to="/favorites">Favorites</Link>
  </header>
)

export default Header
