import {Box, Typography} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import ShopButton from '../../util/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { NavLink } from 'react-router-dom';

export default function CompleteIcon(){
  return (
    <Box sx={{paddingTop: '84px', paddingBottom: '116px',  display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <Box sx={{height: '200px', width: '200px', background: '#f0f0f0', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '40px'}}>
        <CheckIcon sx={{color: '#88c8bc', fontSize: '100px'}} />
      </Box>
      <Typography variant='body1' sx={{marginBottom: '24px', fontSize: '32px', fontFamily: 'Rokkit, Georgia, serif', lineHeight: '1.5', backgroundColor: '#595959', color: 'white', padding: '2px 5px'}}>Thank you for purchasing, Your order is complete.</Typography>
      <Box sx={{display:'flex', gap: '8px'}}>
        <ShopButton cosmetic={{backgroundColor: 'white', border: '1px solid #616161 !important;', '&:hover' : {color: 'white'}, boxShadow: 'none'}}>
          <NavLink to= '/' className="link-hover-white">Home</NavLink>
        </ShopButton>
        <ShopButton cosmetic={{backgroundColor: 'white', color: '#616161', border: '1px solid #616161 !important;', '&:hover' : {color: 'white'}, boxShadow: 'none'}}><ShoppingCartOutlinedIcon />
          <NavLink to= '/men' className="link-hover-white">
                Continue Shopping
          </NavLink>
        </ShopButton>
      </Box>
    </Box>
  )
}