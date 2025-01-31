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
        margin: '40px auto 20px auto',
      }}
    >
        <Typography sx={{ color: "#000", fontWeight: "normal", textTransform: 'uppercase', flex: 1, textAlign: 'center' }}>
          Product Name
        </Typography>
        <Typography sx={{ color: "#000", fontWeight: "normal", textTransform: 'uppercase', flex: 1, textAlign: 'center' }}>
          Quantity
        </Typography>
        <Typography sx={{ color: "#000", fontWeight: "normal", textTransform: 'uppercase', flex: 1, textAlign: 'center' }}>
          Total Price
        </Typography>
        <Typography sx={{ color: "#000", fontWeight: "normal", textTransform: 'uppercase', flex: 1, textAlign: 'center' }}>
          Order Date
        </Typography>
        <Typography sx={{ color: "#000", fontWeight: "normal", textTransform: 'uppercase', flex: 1, textAlign: 'center' }}>
          Status
        </Typography>
    </Box>
  );
}
