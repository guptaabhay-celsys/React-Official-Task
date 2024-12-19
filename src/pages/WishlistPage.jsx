import { Box } from '@mui/material'
import FlowDiagram from '../util/FlowDiagram'
import HeaderSection from '../components/Wishlist/HeaderSection'
import FavouriteProducts from '../components/Wishlist/FavouriteProducts'
import RelatedProductsData from '../data/relatedProductsData'
import Partners from '../util/Partners'
import Breadcrumb from '../util/NavigatedPath'

export default function WishlistPage(){
  return (
    <>
      <Breadcrumb />
      <Box sx={{width: 'calc(100% - 150px)', margin: '98px auto'}}>
        <FlowDiagram activeStep={0} />
        <HeaderSection />
        <FavouriteProducts />
        <Partners data = {RelatedProductsData()} text = 'Shop More' />
      </Box>
    </>
  )
}