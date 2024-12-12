import { Box, Typography } from "@mui/material";
import ShopButton from '../util/Button'

// eslint-disable-next-line react/prop-types
export default function ShoesCard({ image, text }) {
  return (
      <Box sx={{
        height: '400px', 
        width: '100%', 
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'flex-start', 
        textAlign: 'center', 
        position: 'relative',
        padding: '28px 14px', 
        border: '1px solid lightgray',
        boxSizing: "border-box"
      }}>
        <Box sx={{
          position: 'absolute', 
          textAlign: 'center',
          color: 'white', 
          zIndex: 1 
        }}>
          <Typography variant="body1" sx={{ marginBottom: '8px', fontWeight: '500', fontSize: '40px', fontFamily: 'Rokkit, Georgia, serif', color: 'lightgray' }}>
            {text}
          </Typography>
          <ShopButton cosmetic={{padding: '18px 36px', textTransform: 'none'}}>Shop Now</ShopButton>
        </Box>
      </Box>
  );
}
