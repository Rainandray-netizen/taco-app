import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './HeaderStyles'

const Header = () => {
  const classes = useStyles()

  return (
    <div>
      <hr />
      <header className={classes.headerWrapper}>
        <div className={classes.header}>
          <Link to="/">Home</Link>
          <Link to="/taco-chaos">Taco Chaos</Link>
          <Link to="/curated-tacos">Curated Tacos</Link>
          <Link to="/favorites">Favorites</Link>
        </div>
      </header>
      <hr />
    </div>
  )
}

export default Header
