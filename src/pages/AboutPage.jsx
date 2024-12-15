import { Box } from "@mui/material";
import VideoSection from "../components/About/VideoSection";
import Breadcrumb from "../util/NavigatedPath";

export default function AboutPage(){
    return (
        <>
        <Breadcrumb />
        <Box sx={{width: 'calc(100% - 150px)', margin: '98px auto 294px auto'}}> 
            <VideoSection />
        </Box>
        </>
    )
}