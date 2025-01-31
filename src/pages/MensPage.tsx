import MensPromotionBanner from "../util/Banner";
import ShoesTypeCards from "../util/ShoesTypeCards";
import Partners from '../util/Partners'
import casualsMen from '../assets/images/item-8.jpg'
import { Box, Typography } from "@mui/material";
import menPromotion from '../assets/Other Images/men-promotion.jpg'
import Breadcrumb from "../util/NavigatedPath";
import MenProductSection from '../components/Men/MenProductSection'

export default function MensPage() {
  const text = "Men's Products"
  return (
    <>
      <Breadcrumb />
      <Box sx={{width: 'calc(100% - 150px)',
        margin: ' 0px auto 98px auto',}}>
        <MensPromotionBanner image = {menPromotion} text = "men's" />
        <ShoesTypeCards image = {casualsMen} />
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
        <MenProductSection />
        <Partners cosmetic={{}} text="" data={[]} />
      </Box>
    </>
  );
}