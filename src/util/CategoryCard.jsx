import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CategoryCard = ({ title, link, image }) => (
  <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
    <Box
      sx={{
        height: '488px',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    ></Box>
    <Typography
      sx={{
        textAlign: 'center',
        fontSize: '35px',
        marginTop: '20px',
        fontFamily: 'Rokkit, Georgia, serif',
      }}
    >
      <NavLink to={link} style={({ isActive }) => ({
        textDecoration: 'none', 
        color: isActive ? '#616161' : '#616161',
      })}>
        {title}
      </NavLink>
    </Typography>
  </Box>
);

export default CategoryCard;
  