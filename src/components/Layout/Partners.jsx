import { Box, Typography } from "@mui/material"
import partner1 from '../../assets/images/brand-1.jpg'
import partner2 from '../../assets/images/brand-2.jpg'
import partner3 from '../../assets/images/brand-3.jpg'
import partner4 from '../../assets/images/brand-4.jpg'
import partner5 from '../../assets/images/brand-5.jpg'

export default function Partners() {
    return (
        <Box sx={{ padding: '98px 0px', display: "flex", flexDirection: 'column', justifyContent: "center" }}>
            <Box sx={{ marginBottom: '90px', color: 'rgba(0, 0, 0, 0.3)' }}>
                <Typography variant="h1" sx={{ fontFamily: 'Rokkitt, Georgia, serif', fontSize: '20px', fontWeight: '700', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Trusted Partners
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '60px' }}>
                <Box
                    sx={{
                        backgroundImage: `url(${partner1})`,
                        border: "none",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                        height: '120px', 
                        width: '162px', 
                        borderRadius: '10px', 
                    }}
                ></Box>
                <Box
                    sx={{
                        backgroundImage: `url(${partner2})`,
                        border: "none",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                        height: '120px', 
                        width: '162px', 
                        borderRadius: '10px',
                    }}
                ></Box>
                <Box
                    sx={{
                        backgroundImage: `url(${partner3})`,
                        border: "none",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                        height: '120px',
                        width: '162px', 
                        borderRadius: '10px',
                    }}
                ></Box>
                <Box
                    sx={{
                        backgroundImage: `url(${partner4})`,
                        border: "none",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                        height: '120px',
                        width: '162px',  
                        borderRadius: '10px',
                    }}
                ></Box>
                <Box
                    sx={{
                        backgroundImage: `url(${partner5})`,
                        border: "none",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                        height: '120px', 
                        width: '162px', 
                        borderRadius: '10px',
                    }}
                ></Box>
            </Box>
        </Box>
    )
}
