import { makeStyles } from '@material-ui/core/styles'
import bkgimg from './taco-background.jpg'

const AppStyles = makeStyles({
  backgroundImage: {
    backgroundImage: `url(${bkgimg})`,
    backgroundSize: 'cover',
    minHeight: '93.5%',
  },
})

export default AppStyles
