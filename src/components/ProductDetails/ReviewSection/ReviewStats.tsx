import { Box, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

export default function ReviewStats() {
  const reviewData = [
    { rating: 5, percentage: 98, reviews: 20 },
    { rating: 4, percentage: 85, reviews: 10 },
    { rating: 3, percentage: 70, reviews: 5 },
    { rating: 2, percentage: 10, reviews: 0 },
    { rating: 1, percentage: 0, reviews: 0 },
  ];

  return (
    <Box sx={{ padding: '28px', backgroundColor: '#fafafa', color: '#B3B3B3' }}>
      {reviewData.map((data, index) => (
        <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <Typography variant="body1" sx={{ fontSize: '14px' }}>
            {[...Array(5)].map((_, i) =>
              i < data.rating
                ? <StarIcon key={i} sx={{ color: '#616161', fontSize: '16px', verticalAlign: 'middle' }} />
                : <StarBorderOutlinedIcon key={i} sx={{ color: '#616161', fontSize: '16px', verticalAlign: 'middle' }} />
            )}
            ({data.percentage}%)
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '14px' }}>{data.reviews} Reviews</Typography>
        </Box>
      ))}
    </Box>
  );
}
