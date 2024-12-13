import { Box, Typography} from "@mui/material";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SettingsPhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function ContactInfo() {
  return (
    <Box sx={{paddingBottom: '98px'}}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: "400",
          marginBottom: "10px",
          fontSize: '28px',
          fontFamily: 'Rokkitt, Georiga, serif'
        }}
      >
        Contact Information
      </Typography>
      
      <Box
        sx={{
          display: "flex",
          alignItems: 'center', 
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="body1" sx={{color: '#909090', fontSize: '14px'}}>
            <FmdGoodIcon sx={{verticalAlign: 'middle', marginRight: '4px', color: 'black'}} />
            198 West 21th Street, Suite 721 New York NY 10016
        </Typography>
        <Typography variant="body1" sx={{color: '#909090', fontSize: '14px'}}>
            <SettingsPhoneIcon sx={{verticalAlign: 'middle', marginRight: '4px', color: 'black'}} />
            + 1235 2355 98
        </Typography>
        <Typography variant="body1" sx={{color: '#909090', fontSize: '14px'}}>
            <TelegramIcon sx={{verticalAlign: 'middle', marginRight: '4px', color: 'black'}} />
            info@yoursite.com
        </Typography>
        <Typography variant="body1" sx={{color: '#909090', fontSize: '14px'}}>
            <LanguageIcon sx={{verticalAlign: 'middle', marginRight: '4px', color: 'black'}} />
            yoursite.com
        </Typography>
      </Box>
    </Box>
  );
}
