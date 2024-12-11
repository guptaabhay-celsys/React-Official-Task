import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useSelector } from 'react-redux';
import { currencyFormatter } from './formatting';
import { Box } from '@mui/material';

export default function MultiActionAreaCard({text, cosmetic, navigationType}) {
  const products = useSelector((state) => state.products.products);

  return (
    <Box
      sx={{
        padding: '98px 30px 98px 30px',
        width: '100%',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          paddingBottom: '70px',
          fontWeight: '700',
          fontFamily: 'Rokkitt, Georgia, serif',
          ...cosmetic
        }}
      >
        {text}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px', 
          justifyContent: 'center',
          paddingBottom: '80px'
        }}
      >
        {products.length > 0 ? (
          products.map((product) => (
            <Card
              key={product.id}
              sx={{
                minHeight: '346px',
                flex: '1 1 calc(25% - 24px)',
                borderRadius: '2px',
                border: '1px solid #e0e0e0', // Light grey border
                boxShadow: 'none', // Remove shadow
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
                  image={product.image}
                  alt={product.name}
                  sx={{
                    minHeight: '208px',
                    minWidth: '208px',
                    backgroundSize: 'cover',
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
                      marginBottom: '8px'
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '18px',
                      color: '#000',
                    }}
                  >
                    Price: {currencyFormatter.format(product.price)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        ) : (
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              fontSize: '18px',
              color: '#666',
            }}
          >
            No products available.
          </Typography>
        )}
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        {navigationType}
      </Box>
    </Box>
  );
}