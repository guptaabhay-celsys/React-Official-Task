import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const pages = ['HOME', 'MEN', 'WOMEN', 'ABOUT', 'CONTACT'];

function ResponsiveAppBar() {

  return (
    <AppBar position="static" sx={{backgroundColor: 'white', boxShadow: 'none'}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', padding: '16px' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: 'flex', gap: '5px', color: 'black' }}>
            <ShoppingCartIcon />
            <Typography>CART [0]</Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
