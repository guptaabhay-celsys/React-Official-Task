import { Box, Button, Typography } from "@mui/material";
import BillingSection from "../components/Checkout/BillingSection";
import FlowDiagram from '../util/FlowDiagram'
import Breadcrumb from "../util/NavigatedPath";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function CheckoutPage(){
    const cartItems = useSelector(state => state.cart.items);
    return (
        <>
        <Breadcrumb />
        {cartItems.length === 0 ? (
            <Box sx={{margin: '98px auto 196px auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant="body1" sx={{textAlign: 'center', fontSize: '36px', fontFamily: 'Montserrat, Arial, sans-serif',}}>Add Items to Proceed!</Typography>
                <NavLink to='/'>
                    <Button sx={{ color: '#616161', textDecoration: 'underline', letterSpacing: '0.5px'}}>View Products</Button>
                </NavLink>
            </Box>

        ) :
        (
            <Box sx={{width: 'calc(100% - 150px)', margin: '98px auto'}}>
            <FlowDiagram activeStep={1} cosmetic = {{paddingBottom: '98px'}} />
            <BillingSection />
            </Box>
        )}
        </>
    )
}