/* eslint-disable react/prop-types */
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';

// eslint-disable-next-line react/prop-types
const ProductCard = ({ id, image, name, price, currencyFormatter }) => {
  return (
    <Card
      key={id}
      sx={{
        borderRadius: '2px',
        border: '1px solid #e0e0e0',
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardActionArea
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={name}
          sx={{
            height: '250px',
            width: '100%',
            objectFit: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <CardContent
          sx={{
            flex: 1,
            textAlign: 'center',
            fontFamily: 'Rokkitt, Georgia, serif',
            padding: '21px',
            boxSizing: 'border-box',
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              lineHeight: '1.5',
              fontSize: '18px',
              color: '#000',
              textTransform: 'uppercase',
              textWrap: 'wrap',
              marginBottom: '8px',
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: '18px',
              color: '#000',
            }}
          >
            Price: {currencyFormatter.format(price)}
          </Typography>
          <Button variant="standard" sx={{backgroundColor: '#616161', borderRadius: '4px', color: 'white', textTransform: 'none', marginTop: '10px'}}>
            Add to Cart
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
