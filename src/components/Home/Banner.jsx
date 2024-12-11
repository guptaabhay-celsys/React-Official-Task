import { Box, Typography} from '@mui/material';
import image from '../../assets/images/img_bg_1.jpg';
import ShopButton from '../../util/Button.jsx'

const BannerWithImage = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '600px',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative', 
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white', 
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" sx={{fontSize: '60px', fontWeight: '700', fontFamily: 'Rokkitt, Georgia, serif'}}>
          Men`s
        </Typography>
        <Typography variant="h5" sx={{fontSize: '30px', letterSpacing: '2px', fontWeight: '500', fontFamily: 'Rokkitt, Georgia, serif'}}>
          Shoes
        </Typography>
        <Typography variant="body1" sx={{fontSize: '50px', letterSpacing: '1px', fontWeight: '100', fontFamily: 'Rokkitt, Georgia, serif'}}>
          Collection
        </Typography>
        <Typography variant="body1" sx={{fontSize: '20px', letterSpacing: '1px', marginBottom: '30px', fontFamily: 'Montserrat, Arial, sans-serif', color: '#FFFFFFCC'}}>
          New Trending Shoes
        </Typography>
        <ShopButton cosmetic={{padding: '20px 30px', letterSpacing: '3px', textTransform: 'uppercase'}}>Shop Collection</ShopButton>
      </Box>
    </Box>
  );
};

export default BannerWithImage;
