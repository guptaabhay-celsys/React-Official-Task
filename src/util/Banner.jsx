import { Box, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function MensPromotionBanner({image, text}){
    return (
        <>
            <Box sx={{
                padding: '50px', 
                height: '290px',
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                boxSizing: 'border-box',
            }}>
                <Typography variant="body1" sx={{
                    fontSize: '40px',
                    fontFamily: 'Rokkitt, Georgia, serif',
                    textTransform: 'uppercase'
                }}>{text}</Typography>
            </Box>
            <Box sx={{
                backgroundColor: '#616161',
                padding: '16px',
                display: "flex",
                alignItems: 'center', 
                color: 'white',
                justifyContent: 'center',
                marginBottom: '30px',
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
                    <Typography variant="body1" sx={{fontWeight: '300', cursor: 'pointer'}}>NEW ARRIVALS</Typography>
                    <Typography variant="body1" sx={{fontWeight: '300', cursor: 'pointer'}}>BEST SELLERS</Typography>
                    <Typography variant="body1" sx={{fontWeight: '300', cursor: 'pointer'}}>EXTENDED WIDTHS</Typography>
                    <Typography variant="body1" sx={{fontWeight: '300', cursor: 'pointer'}}>SALE</Typography>
                </Box>
            </Box>
        </>
    );
}
