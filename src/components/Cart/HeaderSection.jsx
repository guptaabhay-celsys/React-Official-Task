import { Box, Typography } from "@mui/material";

export default function HeaderSection() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        padding: "10px 20px",
        borderRadius: "30px",
        margin: '98px auto 20px auto',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "normal",
          color: "#000",
          fontSize: '16px',
          textTransform: 'uppercase' 
        }}
      >
        Product Details
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
          fontSize: '16px',
          textTransform: 'uppercase' 
        }}

      >
        <Typography sx={{ color: "#000", fontWeight: "normal" }}>Price</Typography>
        <Typography sx={{ color: "#000", fontWeight: "normal" }}>Quantity</Typography>
        <Typography sx={{ color: "#000", fontWeight: "mormal" }}>Total</Typography>
        <Typography sx={{ color: "#000", fontWeight: "normal" }}>Remove</Typography>
      </Box>
    </Box>
  );
}
