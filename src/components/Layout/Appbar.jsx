import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

function ResponsiveAppBar() {

  return (
    <Box sx={{backgroundColor: 'white', boxShadow: 'none', width: '100%'}}>
      <Box sx={{display: 'flex', justifyContent: 'space-between', boxSizing: 'border-box', padding: '0px 80px 10px 70px',}}>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap: '10px' } }}>
          <Button sx={{color: 'black', padding: '0', textAlign: 'left', '&:hover': { backgroundColor: 'transparent',}, '&:active': { backgroundColor: 'transparent' },}}>
          <NavLink
            to='' style={({ isActive }) => ({ color: isActive ? '#88c8bc' : 'inherit', textDecoration: 'none', })}end>
            HOME
          </NavLink>
        </Button>

        <Button sx={{color: 'black', padding: '0', textAlign: 'left', '&:hover': { backgroundColor: 'transparent',}, '&:active': { backgroundColor: 'transparent' },}}>
          <NavLink
            to='/men' style={({ isActive }) => ({ color: isActive ? '#88c8bc' : 'inherit', textDecoration: 'none', })}>
            MEN
          </NavLink>
        </Button>
              <Button sx={{ color: 'black', padding: '0', textAlign: 'left'}} >
                WOMEN
              </Button>
              <Button sx={{ color: 'black', padding: '0', textAlign: 'left'}} >
                ABOUT
              </Button>
              <Button sx={{ color: 'black', padding: '0', textAlign: 'left'}} >
                CONTACT
              </Button>
          </Box>
          <Box sx={{ flexGrow: 0, display: 'flex', gap: '5px', color: 'black' }}>
            <ShoppingCartIcon />
            <Typography sx={{ letterSpacing: '2px' }}>CART [0]</Typography>
          </Box>
      </Box>
    </Box>
  );
}
export default ResponsiveAppBar;
