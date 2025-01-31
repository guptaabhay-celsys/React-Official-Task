import { Box, Typography,  } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from "react-router-dom";

const UserProfile = () => (
    <Box sx={{ flexGrow: 0, display: 'flex', gap: '5px', color: 'black' }}>
      <Typography sx={{ letterSpacing: '2px', fontSize: '14px' }}>
        <NavLink
          to= '/profile'
          style={({ isActive }) => ({
            color: isActive ? "black" : "gray",
            textDecoration: "none",
          })}
        >
        <AccountCircleIcon sx={{ verticalAlign: 'bottom', fontSize: '20px' }} />
          USER
        </NavLink>
      </Typography>
    </Box>
  );

  export default UserProfile;