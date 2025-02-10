import { Box } from '@mui/material'
import FlowDiagram from '../util/FlowDiagram'
import Partners from '../util/Partners'
import ProductsCart from '../components/Cart/ProductsCart'
import Breadcrumb from '../util/NavigatedPath';
import { useEffect, useState } from "react";
import { cartProduct } from '.././types';

export default function CartPage(){
  const [displayedProducts, setDisplayedProducts] = useState<cartProduct[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: cartProduct[] = await response.json();
        setDisplayedProducts(data.slice(0, 4));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Breadcrumb />
      <Box sx={{width: 'calc(100% - 150px)', margin: '98px auto'}}>
        <FlowDiagram activeStep={0} cosmetic={{}} />
        <ProductsCart />
        <Partners data={displayedProducts} text='Related Products' cosmetic={{}} />
      </Box>
    </>
  )
}