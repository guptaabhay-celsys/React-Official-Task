import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { currencyFormatter } from './formatting';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Element, Link } from 'react-scroll';

// eslint-disable-next-line react/prop-types
export default function MultiActionAreaCard({ style, menStyle, navigationType, cosmetic, text }) {
  const location = useLocation();
  const isWomenPage = location.pathname === '/women';
  const isMenPage = location.pathname === '/men';
  const isHomePage = location.pathname === '/';
  const products = useSelector((state) => state.products.products);
  const filteredProducts = useSelector((state) => state.products.filteredProducts);

  const updatedProductsWomen = (productList) =>
    productList.filter((product) => product.name.includes('omen'));

  const updatedProductsMen = (productList) =>
    productList.filter((product) => !product.name.includes('omen'));

  const productsToDisplay = filteredProducts.length > 0
    ? isWomenPage
      ? updatedProductsWomen(filteredProducts)
      : isMenPage
        ? updatedProductsMen(filteredProducts)
        : filteredProducts
    : isWomenPage
      ? updatedProductsWomen(products)
      : isMenPage
        ? updatedProductsMen(products)
        : products;

  return (
    <Element name="home-products">
      <Box
        sx={{
          padding: isWomenPage || isMenPage ? '0px 0px 98px 0px' : '98px auto',
          flex: '1',
          ...style,
          ...menStyle,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            paddingBottom: isHomePage ? '70px' : '0px',
            fontWeight: '700',
            fontFamily: 'Rokkitt, Georgia, serif',
            ...cosmetic,
          }}
        >
          {text}
        </Typography>
      
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: isHomePage ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)',
            gap: '30px',
            justifyContent: 'center',
            paddingBottom: '80px',
            width: '100%',
          }}
        >
          {productsToDisplay.length > 0 ? (
            productsToDisplay.map((product) => (
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
                fontSize: '22px',
                color: '#666',
              }}
            >
              No products available.
            </Typography>
          )}
        </Box>
      
        <Link to="home-products" smooth={true} duration={500} offset={-50}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {navigationType}
          </Box>
        </Link>
      </Box>
    </Element>
  );
}
