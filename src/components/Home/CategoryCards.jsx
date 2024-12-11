import { Box, Typography } from "@mui/material";
import menCategoryImage from '../../assets/images/img_bg_3.jpg';
import womenCategoryImage from '../../assets/images/item-10.jpg';

export default function CategoryCards() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '30px',
        padding: '98px 15px', 
        boxSizing: 'border-box', 
      }}
    >

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            height: '488px', 
            backgroundImage: `url(${menCategoryImage})`,
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
          Shop Men&apos;s Collection
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            height: '488px', 
            backgroundImage: `url(${womenCategoryImage})`,
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
          Shop Women&apos;s Collection
        </Typography>
      </Box>
    </Box>
  );
}
