import MensPromotionBanner from "../util/Banner";
import ShoesTypeCards from "../util/ShoesTypeCards";
import MultiActionAreaCard from '../util/ProductCards';
import PaginationOutlined from "../components/Men/Pagination";
import Partners from '../util/Partners'
import casualsMen from '../assets/images/item-8.jpg'
import { Box } from "@mui/material";
import menPromotion from '../assets/Other Images/men-promotion.jpg'
import Breadcrumb from "../util/NavigatedPath";

export default function MensPage() {
  return (
    <>
    <Breadcrumb />
    <Box sx={{width: 'calc(100% - 150px)',
      margin: ' 0px auto 98px auto',}}>
      <MensPromotionBanner image = {menPromotion} text = "men's" />
      <ShoesTypeCards image = {casualsMen} />
      <MultiActionAreaCard text= 'View All Products' cosmetic={{fontSize: '20px', textTransform: 'uppercase', color: 'rgba(0, 0, 0, 0.3)'}} navigationType={<PaginationOutlined />}  menStyle={{paddingTop: '98px'}}/>
      <Partners />
    </Box>
    </>
  );
}