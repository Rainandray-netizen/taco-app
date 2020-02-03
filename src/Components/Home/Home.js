import React from 'react'
import useStyles from './HomeStyles'

const Home = () => {
  const classes = useStyles()

  return (
    <div>
      <h1 className={classes.frontpageHeading}>
        Welcome to the World of Tacos!
      </h1>
    </div>
  )
}

export default Home
