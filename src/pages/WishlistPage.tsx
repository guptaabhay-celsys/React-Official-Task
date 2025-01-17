import { Box } from '@mui/material'
import FlowDiagram from '../util/FlowDiagram'
import HeaderSection from '../components/Wishlist/HeaderSection'
import FavouriteProducts from '../components/Wishlist/FavouriteProducts'
import Partners from '../util/Partners'
import Breadcrumb from '../util/NavigatedPath'
import { useEffect, useState } from 'react'

type Product = {
  id: string | number;
  name: string;
  price: number;
  image_url: string;
  gender: string;
};

export default function WishlistPage(){
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch('http://localhost:3000/products');
          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }
          const data: Product[] = await response.json();
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
        <HeaderSection />
        <FavouriteProducts cosmetic={{}} />
        <Partners data={displayedProducts} text='Shop More' cosmetic={{}} />
      </Box>
    </>
  )
}