import { Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const NavWithIcon = ({ to, label, quantity, Icon, }) => (
    <Box sx={{ flexGrow: 0, display: 'flex', gap: '5px', color: 'black' }}>
      
      <Typography sx={{ letterSpacing: '2px' }}>
      <NavLink
        to={to}
        style={({ isActive }) => ({
          color: isActive ? "black" : "gray",
          textDecoration: "none",
        })}
      >
          <Icon style = {{verticalAlign: 'bottom'}} /> {label} [{quantity}]
        </NavLink>
      </Typography>
    </Box>
  );

  export default NavWithIcon;