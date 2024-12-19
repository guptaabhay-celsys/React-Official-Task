import { Box, Typography } from '@mui/material'
import profile from '../../../assets/Other Images/OIP.jpg'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';

export default function PublicReview(){
  return (
    <Box sx={{display: 'flex', gap: '20px'}}>
      <Box sx={{
        padding: '50px', 
        height: '80px',
        width: '80px',
        borderRadius: '50%',
        backgroundImage: `url(${profile})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        boxSizing: 'border-box',
      }}></Box>

      <Box sx={{display: 'flex', flexDirection: 'column', gap:'20px', paddingTop: '10px'}}>
        <Box>
          <Box sx={{display: 'flex', justifyContent: 'space-between', color: 'black'}}>
            <Typography variant="body1" sx={{fontSize: '14px', fontFamily: 'Rokkitt, Georgia, serif'}}>JACOB WEBB</Typography>
            <Typography variant="body1" sx={{fontSize: '13px', fontFamily: 'Rokkitt, serif', textTransform: 'uppercase'}}>14 march 2018</Typography>
          </Box>
        </Box>
        <Box>
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography>
              <StarIcon sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
              <StarIcon sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
              <StarIcon sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
              <StarHalfIcon sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
              <StarBorderOutlinedIcon sx={{color: '#616161', fontSize: '16px', verticalAlign: 'middle'}} />
            </Typography>
            <Box>
              <ReplyOutlinedIcon /> 
            </Box>
          </Box>
        </Box>
        <Box sx={{marginBottom: '20px'}}>
          <Typography variant="body1" sx={{fontSize: '15px'}}>
                    When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}