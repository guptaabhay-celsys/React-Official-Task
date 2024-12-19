import { Box } from "@mui/material";
import BannerWithImage from "../components/Home/Banner";
import Quote from "../components/Home/Quote";
import CategoryCards from "../components/Home/CategoryCards";
import MultiActionAreaCard from "../util/ProductCards";
import ShopButton from "../util/Button";
import Partners from '../util/Partners';

export default function HomePage(){
  const isPartnersPresent = true;
    
  return (
    <Box sx={{ backgroundColor: '#ffffff'}}>
      <BannerWithImage />
      <Quote />
      <CategoryCards />
      <MultiActionAreaCard text='Best Sellers' cosmetic={{fontSize: '40px', textTransform: 'uppercase', color: '#000'}} 
        navigationType={<ShopButton cosmetic={{ padding: '18px 36px', fontSize: '14px', letterSpacing: '1px', textTransform: 'capitalize' }}>Shop All Products</ShopButton>} style = {{width: 'calc(100% - 150px)', margin: '0px auto', paddingTop: '98px', paddingBottom: '98px'}} />
      {isPartnersPresent && <Partners cosmetic={{width: 'calc(100% - 150px)', margin: '0px auto'}} />}
    </Box>
  );
}
