import { Box } from "@mui/material";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";

export default function ContactPage(){
    return (
        <Box sx={{width: 'calc(100% - 150px)', margin: '98px auto'}}>
            <ContactInfo />
            <ContactForm />
        </Box>
    )
}