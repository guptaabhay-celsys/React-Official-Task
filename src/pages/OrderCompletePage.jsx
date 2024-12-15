import { Box } from '@mui/material'
import FlowDiagram from '../util/FlowDiagram'
import CompleteIcon from '../components/OrderComplete/CompleteIcon'
import Breadcrumb from '../util/NavigatedPath'

export default function OrderCompletePage(){
    return (
        <>
        <Breadcrumb />
        <Box sx={{width: 'calc(100% - 150px)', margin: '98px auto'}}>
            <FlowDiagram activeStep={2} />
            <CompleteIcon />
        </Box>
        </>
    )
}