import { Box, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

export default function ReviewStats(){
    return (
        <Box sx={{padding: '28px', backgroundColor: '#fafafa', color: '#B3B3B3'}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between',marginBottom: '20px'}}>
                <Typography variant="body1" sx={{fontSize: '14px'}}>
                    <StarIcon  sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
                    <StarIcon  sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
                    <StarIcon sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
                    <StarIcon sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
                    <StarIcon sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
                    (98%)
                </Typography>
                <Typography variant="body1" sx={{fontSize: '14px'}}>20 Reviews</Typography>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between',marginBottom: '20px'}}>
                <Typography variant="body1" sx={{fontSize: '14px'}}>
                    <StarIcon  sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
                    <StarIcon  sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
                    <StarIcon  sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
                    <StarIcon  sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
                    <StarBorderOutlinedIcon  sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
                    (85%)
                </Typography>
                <Typography variant="body1" sx={{fontSize: '14px'}}>10 Reviews</Typography>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between',marginBottom: '20px'}}>
                <Typography variant="body1" sx={{fontSize: '14px'}}>
                    <StarIcon  sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
                    <StarIcon  sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
                    <StarIcon  sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
                    <StarBorderOutlinedIcon  sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
                    <StarBorderOutlinedIcon  sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
                    (70%)
                </Typography>
                <Typography variant="body1" sx={{fontSize: '14px'}}>5 Reviews</Typography>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between',marginBottom: '20px'}}>
                <Typography variant="body1" sx={{fontSize: '14px'}}>
                    <StarIcon  sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
                    <StarIcon  sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
                    <StarBorderOutlinedIcon  sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
                    <StarBorderOutlinedIcon  sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
                    <StarBorderOutlinedIcon  sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
                    (10%)
                </Typography>
                <Typography variant="body1" sx={{fontSize: '14px'}}>0 Reviews</Typography>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between',marginBottom: '20px'}}>
                <Typography variant="body1" sx={{fontSize: '14px'}}>
                    <StarIcon  sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
                    <StarBorderOutlinedIcon  sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
                    <StarBorderOutlinedIcon  sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
                    <StarBorderOutlinedIcon  sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
                    <StarBorderOutlinedIcon  sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
                    (0%)
                </Typography>
                <Typography variant="body1" sx={{fontSize: '14px'}}>0 Reviews</Typography>
            </Box>
        </Box>
    )
}