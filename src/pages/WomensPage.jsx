import ShoesTypeCards from '../util/ShoesTypeCards'
import casualsWomen from '../assets/Other Images/image1.jpg'
import WomenProductSection from '../components/Women/WomenProductSection';
import { Box } from '@mui/material';
import MensPromotionBanner from '../util/Banner';
import womenPromotion from '../assets/Other Images/women-promotion.jpg'
import Breadcrumb from '../util/NavigatedPath';

export default function WomensPage(){
    return (
        <>
            <Breadcrumb />
            <Box sx={{width: 'calc(100% - 150px)',
            margin: '0px auto 98px auto',}}>
            <MensPromotionBanner image = {womenPromotion} text = "women's" />
            <ShoesTypeCards image = {casualsWomen}/>
            <WomenProductSection />
            </Box>
        </>
    )
}