import React from 'react'
import Button from '@material-ui/core/Button'
import useStyles from './GenerateButtonStyles'

const GenerateButton = (props) => {
  const { text, functionality } = props
  const classes = useStyles()

  return (
    <Button type="button" onClick={functionality} className={classes.bigButton}>{text}</Button>
  )
}

export default GenerateButton
