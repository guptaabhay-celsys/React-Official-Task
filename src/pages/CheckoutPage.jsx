import { Box } from "@mui/material";
import BillingSection from "../components/Checkout/BillingSection";
import FlowDiagram from '../util/FlowDiagram'
import Breadcrumb from "../util/NavigatedPath";

export default function CheckoutPage(){
    return (
        <>
        <Breadcrumb />
        <Box sx={{width: 'calc(100% - 150px)', margin: '98px auto'}}>
            <FlowDiagram activeStep={1} cosmetic = {{paddingBottom: '98px'}} />
            <BillingSection />
        </Box>
        </>
    )
}