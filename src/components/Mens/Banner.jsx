import { Box, Typography } from "@mui/material";
import PromotionImage from '../../assets/images/img_bg_3.jpg';

export default function MensPromotionBanner(){
    return (
        <>
            <Box sx={{
                padding: '50px', 
                width: 'calc(100% - 100px)', 
                height: '290px',
                backgroundImage: `url(${PromotionImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                boxSizing: 'border-box',
                margin: ' 50px auto 0 auto', 
            }}>
                <Typography variant="body1" sx={{
                    fontSize: '40px',
                    fontFamily: 'Rokkitt, Georgia, serif'
                }}>MEN&apos;S</Typography>
            </Box>
            <Box sx={{
                backgroundColor: '#616161',
                padding: '16px',
                display: "flex",
                alignItems: 'center', 
                color: 'white',
                justifyContent: 'center',
                width: 'calc(100% - 100px)', 
                margin: '0 auto 30px  auto',
            }}>
                <Box sx={{
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-evenly', 
                    gap: '40px', 
                    color: 'white', 
                    fontSize: '14px', 
                    fontFamily: 'Montserrat, Arial, sans-serif'
                }}>
                    <Typography variant="body1" sx={{fontWeight: '300'}}>NEW ARRIVALS</Typography>
                    <Typography variant="body1" sx={{fontWeight: '300'}}>BEST SELLERS</Typography>
                    <Typography variant="body1" sx={{fontWeight: '300'}}>EXTENDED WIDTHS</Typography>
                    <Typography variant="body1" sx={{fontWeight: '300'}}>SALE</Typography>
                </Box>
            </Box>
        </>
    );
}
