import { Box } from "@mui/material";
import Orders from "../components/Orders/Orders";
import Breadcrumb from "../util/NavigatedPath";

export default function OrdersPage(){
  return (
    <>
      <Breadcrumb />
      <Box sx={{width: 'calc(100% - 150px)', margin: '20px auto 294px auto'}}> 
        <Orders />
      </Box>
    </>
  )
}