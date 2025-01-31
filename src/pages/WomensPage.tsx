import ShoesTypeCards from '../util/ShoesTypeCards'
import casualsWomen from '../assets/Other Images/image1.jpg'
import WomenProductSection from '../components/Women/WomenProductSection';
import { Box, Typography } from '@mui/material';
import MensPromotionBanner from '../util/Banner';
import womenPromotion from '../assets/Other Images/women-promotion.jpg'
import Breadcrumb from '../util/NavigatedPath';
import Partners from '../util/Partners';

export default function WomensPage(){
  const text = "Women's Products"
  return (
    <>
      <Breadcrumb />
      <Box sx={{width: 'calc(100% - 150px)',
        margin: '0px auto 98px auto',}}>
        <MensPromotionBanner image = {womenPromotion} text = "women's" />
        <ShoesTypeCards image = {casualsWomen}/>
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            padding: '100px 0 40px 0',
            fontWeight: '700',
            fontFamily: 'Rokkitt, Georgia, serif',
            color: '#909090'
          }}
        >
          {text}
        </Typography>
        <WomenProductSection />
        <Partners cosmetic={{}} data={[]} text='' />
      </Box>
    </>
  )
}