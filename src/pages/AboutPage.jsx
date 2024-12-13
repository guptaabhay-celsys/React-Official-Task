import { Box } from "@mui/material";
import VideoSection from "../components/About/VideoSection";

export default function AboutPage(){
    return (
        <Box sx={{width: 'calc(100% - 150px)', margin: '98px auto 294px auto'}}> 
            <VideoSection />
        </Box>
    )
}