import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Element } from 'react-scroll';
import { currencyFormatter } from './formatting';

type ProductCardsType = {
  style: React.CSSProperties;
  menStyle: React.CSSProperties;
  navigationType: React.ReactNode;
  cosmetic: React.CSSProperties;
  text: string;
};

type Product = {
  id: number;
  name: string;
  price: number;
  image_url: string;
  gender: string;
};

export default function MultiActionAreaCard({
  style,
  menStyle,
  navigationType,
  cosmetic,
  text,
}: ProductCardsType) {
  const [products, setProducts] = useState<Product[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [showAll, setShowAll] = useState(false);
  const location = useLocation();

  const isWomenPage = location.pathname === '/women';
  const isMenPage = location.pathname === '/men';
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: Product[] = await response.json();
        setProducts(data);

        setDisplayedProducts(data.slice(0, 15));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const filterProducts = (productsList: Product[]) => {
    if (isWomenPage) {
      return products.filter((product) => product.gender === 'Female');
    }
    if (isMenPage) {
      return products.filter((product) => product.gender === 'Male');
    }
    return productsList;
  };

  const productsToDisplay = filterProducts(displayedProducts);

  const handleShowAllProducts = () => {
    setDisplayedProducts(products);
    setShowAll(true);
  };

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
                image={product.image_url}
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

        {!showAll && (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div onClick={handleShowAllProducts}>{navigationType}</div>
            </Box>
        )}
      </Box>
    </Element>
  );
}
