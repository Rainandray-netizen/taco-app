import {makeStyles} from "@material-ui/core/styles"
import { blue } from "@material-ui/core/colors"

const useStyles = makeStyles({
  productName:{
    color:"red",
    fontWeight:100,
  },
  "@media(min-width:600px)":{
    productName:{
      color:"blue",
    }
  }
})

export default useStyles