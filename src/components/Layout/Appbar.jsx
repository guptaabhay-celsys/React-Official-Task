import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';
import NavButton from '../../util/NavButon';
import NavWithIcon from '../../util/NavWithIcon';

function ResponsiveAppBar() {
  const cartQuantity = useSelector(state => state.cart.totalQuantity);
  const wishlistQuantity = useSelector(state => state.wishlist.totalQuantity);

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
          <NavButton to="/" label="home" />
          <NavButton to="/men" label="men"  />
          <NavButton to="/women" label="women"  />
          <NavButton to="/about" label="about"  />
          <NavButton to="/contact" label="contact"  />
        </Box>

        <Box sx={{ flexGrow: 0, display: 'flex', gap: '35px', color: 'black' }}>
          <NavWithIcon
            to="/wishlist"
            label="WISHLIST"
            quantity={wishlistQuantity}
            Icon={FavoriteIcon}
          />
          <NavWithIcon
            to="/cart"
            label="CART"
            quantity={cartQuantity}
            Icon={ShoppingCartIcon}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default ResponsiveAppBar;
