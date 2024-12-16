import { Box } from "@mui/material";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { useState, useEffect } from "react";

export default function ShiftUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      onClick={scrollToTop}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#616161',
        borderRadius: '4px',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 100,
        height: '50px',
        width: '50px',
        cursor: 'pointer',
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'opacity 0.3s ease, visibility 0.3s ease',
        '&:hover': {
          backgroundColor: '#505050',
        },
      }}
    >
      <KeyboardArrowUpOutlinedIcon sx={{ color: 'white' }} />
    </Box>
  );
}
