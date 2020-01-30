import React from "react"
import {useParams} from "react-router-dom"
import useStyles from "./AboutProductStyles.js"

const AboutProduct = () =>{

  const classes = useStyles()

  const {productName} = useParams()

  return(
    <h1>
      About
      <span className={classes.productName}>
        {" "+productName}
      </span>
    </h1>
  )
}

export default AboutProduct