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
      <NavLink
        to={link}
        style={({ isActive }) => ({
          textDecoration: 'none',
          color: isActive ? 'black' : '#616161',
        })}
        className="category-link"
      >
        {title}
      </NavLink>
    </Typography>
    <style>
      {`
        .category-link {
          transition: all 0.3s ease;
        }
        .category-link:hover {
          background-color: #616161;
          color: white !important;
          padding: 8px 12px;
          border-radius: 5px;
          box-shadow: 1px 1px 4px #616161;
        }
      `}
    </style>
  </Box>
);

export default CategoryCard;
