import { Box } from "@mui/material";
import Profile from '../util/Profile';
import Breadcrumb from "../util/NavigatedPath";

export default function ProfilePage(){
  return (
    <>
      <Breadcrumb />
      <Box sx={{width: 'calc(100% - 150px)', margin: '98px auto 294px auto'}}> 
       <Profile />
      </Box>
    </>
  )
}