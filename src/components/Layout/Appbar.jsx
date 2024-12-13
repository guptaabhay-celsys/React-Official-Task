import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import DropdownList from '../../util/DropdownList';
import { useState } from 'react';

function ResponsiveAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ backgroundColor: 'white', boxShadow: 'none', width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          boxSizing: 'border-box',
          padding: '0px 80px 10px 70px',
        }}
      >
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap: '10px' } }}>
          <Button
            sx={{
              color: 'black',
              padding: '0',
              textAlign: 'left',
              '&:hover': { backgroundColor: 'transparent' },
              '&:active': { backgroundColor: 'transparent' },
            }}
          >
            <NavLink
              to=""
              style={({ isActive }) => ({
                color: isActive ? '#88c8bc' : 'inherit',
                textDecoration: 'none',
              })}
              end
            >
              HOME
            </NavLink>
          </Button>

          <Button
            id="men-button"
            onMouseEnter={handleMenuOpen}
            onMouseLeave={handleMenuClose}
            sx={{
              color: 'black',
              padding: '0',
              textAlign: 'left',
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#88c8bc',
              },
              '&:active': { backgroundColor: 'transparent' },
            }}
          >
            <NavLink
              to="men"
              style={({ isActive }) => ({
                color: isActive ? '#88c8bc' : 'inherit',
                textDecoration: 'none',
              })}
            >
              MEN
            </NavLink>
            <DropdownList anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} />
          </Button>


          <Button
            sx={{
              color: 'black',
              padding: '0',
              textAlign: 'left',
              '&:hover': { backgroundColor: 'transparent' },
              '&:active': { backgroundColor: 'transparent' },
            }}
          >
            <NavLink
              to="women"
              style={({ isActive }) => ({
                color: isActive ? '#88c8bc' : 'inherit',
                textDecoration: 'none',
              })}
            >
              WOMEN
            </NavLink>
          </Button>
          <Button
            sx={{
              color: 'black',
              padding: '0',
              textAlign: 'left',
              '&:hover': { backgroundColor: 'transparent' },
              '&:active': { backgroundColor: 'transparent' },
            }}
          >
            <NavLink
              to="about"
              style={({ isActive }) => ({
                color: isActive ? '#88c8bc' : 'inherit',
                textDecoration: 'none',
              })}
            >
              ABOUT
            </NavLink>
          </Button>
          <Button
            sx={{
              color: 'black',
              padding: '0',
              textAlign: 'left',
              '&:hover': { backgroundColor: 'transparent' },
              '&:active': { backgroundColor: 'transparent' },
            }}
          >
            <NavLink
              to="contact"
              style={({ isActive }) => ({
                color: isActive ? '#88c8bc' : 'inherit',
                textDecoration: 'none',
              })}
            >
              CONTACT
            </NavLink>
          </Button>
        </Box>
        <Box sx={{ flexGrow: 0, display: 'flex', gap: '5px', color: 'black' }}>
          <ShoppingCartIcon />
          <Typography sx={{ letterSpacing: '2px' }}>
            <NavLink
              to="cart"
              style={({ isActive }) => ({
                color: isActive ? 'black' : 'inherit',
                textDecoration: 'none',
              })}
            >
              CART [0]
            </NavLink>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ResponsiveAppBar;