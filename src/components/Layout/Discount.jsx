import { Box, Typography } from "@mui/material";

export default function Discount(){
     return (<Box sx={{
        backgroundColor: '#88c8bc',
        color: 'white', 
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0, 

    }}>
        <Typography variant="body1" sx={{ padding: '10px 0px', fontSize: '24px'}}>OUR BIGGEST SALE YET 50% OFF ALL SUMMER SHOES</Typography>
    </Box>)
}