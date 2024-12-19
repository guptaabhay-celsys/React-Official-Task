import ShoesCard from "./ShoesCards";
import dress from '../assets/images/item-10.jpg'
import sports from '../assets/images/item-11.jpg'
import { Box } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function ShoesTypeCards({image}){
  return(
    <Box sx={{
      display: 'flex', 
      gap: '30px', 
      justifyContent: 'space-evenly',
      overflow: 'hidden',
      marginBottom: '30px'
    }}>
      <ShoesCard image = {image} text = 'Casuals' />
      <ShoesCard image = {dress} text = 'Dress' />
      <ShoesCard image = {sports} text = 'Sports' />
    </Box>
  )
}