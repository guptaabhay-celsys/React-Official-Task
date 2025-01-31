import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import { Box, CircularProgress } from '@mui/material';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Element } from 'react-scroll';
import { currencyFormatter } from './formatting';
import { RootState } from '../store/productsSlice';

type ProductCardsType = {
  style: React.CSSProperties;
  menStyle: React.CSSProperties;
  navigationType: React.ReactNode;
  cosmetic: React.CSSProperties;
  text: string;
  currentPage: number;
  filterMenProducts: any;
  filterWomenProducts: any;
};

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  stock: number;
  image_url: string;
  gender: string;
};

export default function MultiActionAreaCard({
  style,
  menStyle,
  navigationType,
  cosmetic,
  text,
  currentPage,
  filterMenProducts,
  filterWomenProducts
}: ProductCardsType) {
  const products = useSelector((state: RootState) => state.products.products);
  const filteredProducts = useSelector((state: RootState) => state.products.filteredProducts);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [showAll, setShowAll] = useState(false);
  const location = useLocation();

  const isWomenPage = location.pathname === '/women';
  const isMenPage = location.pathname === '/men';
  const isHomePage = location.pathname === '/home';

  const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : displayedProducts;


  useEffect(() => {
    if (products.length > 0) {
      setDisplayedProducts(products.slice(0, 16));
    }
  }, [products]);

  const filterProducts = (productsList: Product[]) => {
    if (isWomenPage) {
      return filterWomenProducts;
    }
    if (isMenPage) {
      return filterMenProducts;
    }
    return productsList;
  };

  const filteredDisplayProducts = filterProducts(products);

  const handleToggleProducts = () => {
    if (showAll) {
      setDisplayedProducts(products.slice(0, 16));
    } else {
      setDisplayedProducts(products);
    }
    setShowAll(!showAll);
  };

  const productsPerPage = 6;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredDisplayProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const productsToRender = isHomePage ? productsToDisplay : currentProducts;

  if (displayedProducts.length === 0) {
    return (
      <Typography
        variant="body2"
        sx={{
          textAlign: 'center',
          fontSize: '16px !important',
          paddingBottom: isHomePage ? '70px' : '0px',
          fontWeight: '500',
          fontFamily: 'Rokkitt, Georgia, serif',
          ...cosmetic,
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
          <CircularProgress sx={{ color: '#88b8bc' }} />
        </Box>
      </Typography>
    );
  }

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
          {productsToRender.length > 0 ? (
            productsToRender.map((product: { id: string | number; image_url: string; name: string; price: number; quantity: number; }) => (
              <ProductCard
                key={product.id}
                product_id={product.id}
                image={product.image_url}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
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

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {isHomePage && (
            <Box
              onClick={handleToggleProducts}
              sx={{
                cursor: 'pointer',
                padding: '20px 30px',
                backgroundColor: 'rgb(97, 97, 97)',
                color: 'white',
                borderRadius: '50px',
                textAlign: 'center',
                fontSize: '16px',
                letterSpacing: '1px',
                '&:hover': {
                  backgroundColor: '#000000',
                },
              }}
            >
              {showAll ? 'See Less Products' : 'Shop All Products'}
            </Box>
          )}
        </Box>
      </Box>
    </Element>
  );
}
