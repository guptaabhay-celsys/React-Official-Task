import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

export default function Discount() {
  const [toggleText, setToggleText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setToggleText((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#88c8bc',
        color: 'white',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="body1"
        sx={{
          padding: '10px 0px',
          fontSize: '24px',
          textAlign: 'center',
          transition: 'transform 1s ease, opacity 0.5s ease',
          transform: toggleText ? 'scale(1)' : 'scale(0.9)', 
          opacity: toggleText ? 1 : 1,
        }}
      >
        {toggleText
          ? "OUR BIGGEST SALE YET 50% OFF ALL SUMMER SHOES"
          : "25% OFF (ALMOST) EVERYTHING! USE CODE: SUMMER SALE"}
      </Typography>
    </Box>
  );
}
