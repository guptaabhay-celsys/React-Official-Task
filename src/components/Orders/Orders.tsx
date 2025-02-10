import { useState, useEffect } from "react";
import {
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import HeaderSection from "./HeaderSection";
import OrderedProducts from "./OrderedProducts"

const Orders = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="50vh"
      >
        <CircularProgress sx={{color: '#88b8bc'}} />
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4">
        My Orders
      </Typography>
      <HeaderSection />
      <OrderedProducts />
    </Box>
  );
};

export default Orders;
