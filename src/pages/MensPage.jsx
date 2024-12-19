import MensPromotionBanner from "../util/Banner";
import ShoesTypeCards from "../util/ShoesTypeCards";
import Partners from '../util/Partners'
import casualsMen from '../assets/images/item-8.jpg'
import { Box } from "@mui/material";
import menPromotion from '../assets/Other Images/men-promotion.jpg'
import Breadcrumb from "../util/NavigatedPath";
import MenProductSection from '../components/Men/MenProductSection'
import PaginationOutlined from "../components/Men/Pagination";

export default function MensPage() {
  return (
    <>
      <Breadcrumb />
      <Box sx={{width: 'calc(100% - 150px)',
        margin: ' 0px auto 98px auto',}}>
        <MensPromotionBanner image = {menPromotion} text = "men's" />
        <ShoesTypeCards image = {casualsMen} />
        <MenProductSection />
        <PaginationOutlined />
        <Partners />
      </Box>
    </>
  );
}