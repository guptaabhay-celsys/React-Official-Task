import { Box } from "@mui/material";
import CommonList from "./CommonList";

export default function BrandBox(){
    return (
        <Box sx={{display: 'flex', position: 'relative',
            boxSizing: 'border-box', alignItems: 'flex-start', justifyContent: 'flex-start', flex: '1'}}>
            <CommonList />
        </Box>
    )
}