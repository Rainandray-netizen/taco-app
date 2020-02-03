import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  frontpageHeading: {
    fontSize: '52px',
    margin: '0px',
    textAlign: 'center',
    color: 'white',
    font: 'bold',
    textShadow: '1px 1px #33dade, 2px 2px #33dade, 3px 3px #33dade',
    '&:hover': {
      textShadow: '1px 1px #33dade, 2px 2px #33dade, 3px 3px #33dade, 4px 4px #33dade, 5px 5px #33dade, 6px 6px #33dade',
      position: 'relative',
      top: '-3px',
      left: '-3px',
    },
  },
})

export default useStyles
