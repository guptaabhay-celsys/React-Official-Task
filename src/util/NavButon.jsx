/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import { NavLink, useLocation } from "react-router-dom";

const NavButton = ({ to, label }) => {
  const location = useLocation();

  const activePaths = ["/", "/men", "/women", "/about", "/contact"];
  const isActive = activePaths.includes(location.pathname);

  return (
    <Button
      sx={{
        color: isActive && location.pathname === to ? "#88b8bc" : "black",
        padding: "0",
        textAlign: "left",
        "&:hover": { backgroundColor: "transparent" },
        "&:active": { backgroundColor: "transparent" },
      }}
    >
      <NavLink
        to={to}
        style={{
          color: isActive && location.pathname === to ? "#88b8bc" : "inherit",
          textDecoration: "none",
        }}
        end
      >
        {label.toUpperCase()}
      </NavLink>
    </Button>
  );
};

export default NavButton;
