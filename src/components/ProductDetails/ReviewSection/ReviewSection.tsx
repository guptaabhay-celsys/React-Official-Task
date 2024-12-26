import { Box, Typography } from "@mui/material"
import PublicReview from "./PublicReviews"
import ReviewStats from "./ReviewStats"

export default function ReviewSection(){
  return (
    <Box sx={{display: 'flex', gap: '30px'}}>
      <Box sx={{flex: '2'}}>
        <Typography variant="body1" sx={{marginBottom: '30px', textTransform: 'uppercase', fontsize: '18px', fontFamily: 'Rokkitt, serif', color: 'black'}}>23 reviews</Typography>
        <PublicReview />
        <PublicReview />
        <PublicReview />
      </Box>
      <Box sx={{flex: '1'}}>
        <Typography variant="body1" sx={{marginBottom: '30px', textTransform: 'uppercase', fontsize: '18px', fontFamily: 'Rokkitt, serif', color: 'black'}}>Give a Review</Typography>
        <ReviewStats />
      </Box>
    </Box>
  )
}