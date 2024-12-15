import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import DropdownList from '../../util/DropdownList';
import { useState } from 'react';

function ResponsiveAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeButton, setActiveButton] = useState('');
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleButtonClick = (button, path) => {
    setActiveButton(button);
    if (path) navigate(path); 
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
              color: activeButton === 'home' ? '#88c8bc' : 'black',
              padding: '0',
              textAlign: 'left',
              '&:hover': { backgroundColor: 'transparent' },
              '&:active': { backgroundColor: 'transparent' },
            }}
          >
            <NavLink
              to="/"
              onClick={() => handleButtonClick('home')}
              style={{
                color: activeButton === 'home' ? '#88c8bc' : 'inherit',
                textDecoration: 'none',
              }}
              end
            >
              HOME
            </NavLink>
          </Button>

          {/* MEN Button */}
          <Button
            id="men-button"
            onClick={() => handleButtonClick('men', '/men')}
            onMouseEnter={handleMenuOpen} 
            onMouseLeave={handleMenuClose} 
            sx={{
              color: activeButton === 'men' ? '#88c8bc' : 'black',
              padding: '0',
              textAlign: 'left',
              '&:hover': { backgroundColor: 'transparent' },
              '&:active': { backgroundColor: 'transparent' },
            }}
          >
            MEN
            <DropdownList
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            />
          </Button>

          <Button
            sx={{
              color: activeButton === 'women' ? '#88c8bc' : 'black',
              padding: '0',
              textAlign: 'left',
              '&:hover': { backgroundColor: 'transparent' },
              '&:active': { backgroundColor: 'transparent' },
            }}
          >
            <NavLink
              to="/women"
              onClick={() => handleButtonClick('women')}
              style={{
                color: activeButton === 'women' ? '#88c8bc' : 'inherit',
                textDecoration: 'none',
              }}
            >
              WOMEN
            </NavLink>
          </Button>

          <Button
            sx={{
              color: activeButton === 'about' ? '#88c8bc' : 'black',
              padding: '0',
              textAlign: 'left',
              '&:hover': { backgroundColor: 'transparent' },
              '&:active': { backgroundColor: 'transparent' },
            }}
          >
            <NavLink
              to="/about"
              onClick={() => handleButtonClick('about')}
              style={{
                color: activeButton === 'about' ? '#88c8bc' : 'inherit',
                textDecoration: 'none',
              }}
            >
              ABOUT
            </NavLink>
          </Button>

          <Button
            sx={{
              color: activeButton === 'contact' ? '#88c8bc' : 'black',
              padding: '0',
              textAlign: 'left',
              '&:hover': { backgroundColor: 'transparent' },
              '&:active': { backgroundColor: 'transparent' },
            }}
          >
            <NavLink
              to="/contact"
              onClick={() => handleButtonClick('contact')}
              style={{
                color: activeButton === 'contact' ? '#88c8bc' : 'inherit',
                textDecoration: 'none',
              }}
            >
              CONTACT
            </NavLink>
          </Button>
        </Box>
        <Box sx={{ flexGrow: 0, display: 'flex', gap: '5px', color: 'black' }}>
          <ShoppingCartIcon />
          <Typography sx={{ letterSpacing: '2px' }}>
            <NavLink
              to="/cart"
              onClick={() => handleButtonClick('cart')}
              style={{
                color: activeButton === 'cart' ? 'black' : 'inherit',
                textDecoration: 'none',
              }}
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
