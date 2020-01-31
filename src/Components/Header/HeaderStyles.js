import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  outerHeader: {
    '& hr': {
      margin: '0px',
      paddingTop: '5px',
      paddingBottom: '5px',
    },
  },
  headerWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  header: {
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '70vw',
    height: '10%',
    fontSize: '30px',
    '& a': {
      textDecoration: 'none',
      color: 'default',
    },
  },
  background: {
    backgroundColor: 'red',
  },
})

export default useStyles
