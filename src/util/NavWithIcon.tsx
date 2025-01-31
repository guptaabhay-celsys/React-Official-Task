import { Typography, Box, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { NavLink } from 'react-router-dom';

type NavIconType = {
  to: string,
  label: string,
  quantity: number,
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string
  }
}

// eslint-disable-next-line react/prop-types
const NavWithIcon = ({ to, label, quantity, Icon }: NavIconType) => (
  <Box sx={{ flexGrow: 0, display: 'flex', gap: '5px', color: 'black' }}>
    <Typography sx={{ letterSpacing: '2px', fontSize: '14px' }}>
      <NavLink
        to={to}
        style={({ isActive }) => ({
          color: isActive ? "black" : "gray",
          textDecoration: "none",
        })}
      >
        <Icon style={{ verticalAlign: 'bottom', fontSize: '20px' }} />
        {label} [{quantity}]
      </NavLink>
    </Typography>
  </Box>
);

export default NavWithIcon;
