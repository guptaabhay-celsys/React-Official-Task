import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useSelector } from 'react-redux';
import { currencyFormatter } from './formatting';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
export default function MultiActionAreaCard({text, cosmetic, navigationType, style, menStyle}) {

  const location = useLocation();
  const isWomenPage = location.pathname === '/women';
  const isMenPage = location.pathname === '/men'
  const products = useSelector((state) => state.products.products);
  const updatedProducts = isWomenPage ? products.slice(1) : products.slice();

  return (
    <Box
      sx={{
        padding: isWomenPage || isMenPage ? '0px 0px 98px 0px' : '98px auto' ,
        flex: '1',
        ...style,
        ...menStyle
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          paddingBottom: isWomenPage ? '0px': '70px',
          fontWeight: '700',
          fontFamily: 'Rokkitt, Georgia, serif',
          ...cosmetic
        }}
      >
        {text}
      </Typography>
      <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: isWomenPage
          ? 'repeat(3, 1fr)' 
          : 'repeat(4, 1fr)',
        gap: '30px',
        justifyContent: 'center',
        paddingBottom: '80px',
        width: '100%',
      }}
    >
      {updatedProducts.length > 0 ? (
        updatedProducts.map((product) => (
          <Card
            key={product.id}
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
                image={product.image}
                alt={product.name}
                sx={{
                  height: '208px', 
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