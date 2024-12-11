import ShoesCard from "./ShoesCards";
import casuals from '../../assets/images/item-8.jpg'
import dress from '../../assets/images/item-5.jpg'
import sports from '../../assets/images/item-11.jpg'
import { Box } from "@mui/material";

export default function ShoesTypeCards(){
    return(
        <Box sx={{
            display: 'flex', 
            gap: '30px', 
            justifyContent: 'space-evenly',
            overflow: 'hidden',
            width: 'calc(100% - 100px)',
            margin: '0 auto 30px  auto', 
        }}>
            <ShoesCard image = {casuals} text = 'Casuals' />
            <ShoesCard image = {dress} text = 'Dress' />
            <ShoesCard image = {sports} text = 'Sports' />
        </Box>
    )
}