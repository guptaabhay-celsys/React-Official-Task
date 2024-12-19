import { Box } from '@mui/material'
import FlowDiagram from '../util/FlowDiagram'
import Partners from '../util/Partners'
import RelatedProductsData from '../data/relatedProductsData'
import ProductsCart from '../components/Cart/ProductsCart'
import Breadcrumb from '../util/NavigatedPath'


export default function CartPage(){
  return (
    <>
      <Breadcrumb />
      <Box sx={{width: 'calc(100% - 150px)', margin: '98px auto'}}>
        <FlowDiagram activeStep={0} />
        <ProductsCart />
        <Partners data = {RelatedProductsData()} text = 'Related Products' />
      </Box>
    </>
  )
}