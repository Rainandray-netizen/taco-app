import { makeStyles } from '@material-ui/core/styles'
// import { FormHelperText } from '@material-ui/core'

const useStyles = makeStyles({
  buttonDiv: {
    display: 'flex',
    justifyContent: 'center',
  },
  recipeDiv: {
    padding: '80px',
    paddingTop: '0px',
    '& h1,h2': {
      textAlign: 'center',
      color: 'white',
      font: 'bold',
      textShadow: '1px 1px #33dade, 2px 2px #33dade, 3px 3px #33dade',
    },
    '& h1': {
      fontSize: '52px',
    },
    '& h2': {
      fontSize: '36px',
    },
    '& h1:hover,h2:hover': {
      position: 'relative',
      top: '-3px',
      left: '-3px',
      textShadow: '1px 1px #33dade, 2px 2px #33dade, 3px 3px #33dade, 4px 4px #33dade, 5px 5px #33dade, 6px 6px #33dade',
    },
    '& p': {
      fontSize: '24px',
      color: 'white',
      font: 'bold',
      textShadow: '1px 1px #914313',
    },
  },
})

export default useStyles
