import { Box } from '@mui/material'
import FlowDiagram from '../components/Cart/FlowDiagram'
import Partners from '../util/Partners'
import relatedProductsData from '../data/relatedProductsData'
import ProductsCart from '../components/Cart/ProductsCart'


export default function CartPage(){
    return (
        <Box sx={{width: 'calc(100% - 150px)', margin: '98px auto'}}>
            <FlowDiagram />
            <ProductsCart />
            <Partners data = {relatedProductsData} text = 'Related Products' />
        </Box>
    )
}