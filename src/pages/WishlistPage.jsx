import { Box } from '@mui/material'
import FlowDiagram from '../util/FlowDiagram'
import HeaderSection from '../components/Cart/HeaderSection'
import ProductSection from '../components/Cart/ProductOty'
import relatedProductsData from '../data/relatedProductsData'
import Partners from '../util/Partners'
import Breadcrumb from '../util/NavigatedPath'

export default function WishlistPage(){
    return (
        <>
        <Breadcrumb />
        <Box sx={{width: 'calc(100% - 150px)', margin: '98px auto'}}>
            <FlowDiagram activeStep={0} />
            <HeaderSection />
            <ProductSection cosmetic = {{marginBottom: '0'}} />
            <Partners data = {relatedProductsData} text = 'Shop More' />
        </Box>
        </>
    )
}