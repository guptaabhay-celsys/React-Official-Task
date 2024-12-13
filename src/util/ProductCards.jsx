import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { currencyFormatter } from './formatting';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';


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
          <ProductCard 
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          currencyFormatter={currencyFormatter}
          />
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