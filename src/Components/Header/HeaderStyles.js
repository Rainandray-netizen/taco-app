import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
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
    height: '80px',
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
