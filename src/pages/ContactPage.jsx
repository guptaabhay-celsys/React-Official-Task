import { Box } from "@mui/material";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import Breadcrumb from "../util/NavigatedPath";

export default function ContactPage(){
    return (
        <>
        <Breadcrumb />
        <Box sx={{width: 'calc(100% - 150px)', margin: '98px auto'}}>
            <ContactInfo />
            <ContactForm />
        </Box>
        </>
    )
}