import { Box, Typography, Grid } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import CustomTextField from '../../util/CustomTextField';

export default function ContactForm() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', paddingBottom: '98px' }}>
      <Box
        sx={{
          padding: '28px',
          backgroundColor: 'whitesmoke',
          fontFamily: 'Montserrat, Arial, sans-serif',
          flex: '1',
          minHeight: '720px',
        }}
      >
        <Typography
          variant="h4"
          color="initial"
          sx={{
            marginBottom: '16px',
            fontSize: '28px',
            fontFamily: 'Rokkitt, Georgia, serif',
            fontWeight: '400',
          }}
        >
          Get In Touch
        </Typography>
        <Grid container spacing={2} sx={{ fontSize: '16px' }}>
          <Grid item xs={6}>
            <CustomTextField label="First Name" placeholder="Your firstname" />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField label="Last Name" placeholder="Your lastname" />
          </Grid>
        </Grid>
        <CustomTextField label="Email" placeholder="Your email address" />
        <CustomTextField label="Subject" placeholder="Your subject of this message" />
        <CustomTextField
          label="Message"
          placeholder="Say something about us"
          multiline
          rows={4}
        />
      </Box>

      <Box
        sx={{
          padding: '28px',
          backgroundColor: '#e9e9e9',
          fontFamily: 'Montserrat, Arial, sans-serif',
          flex: '1',
          textAlign: 'center',
          minHeight: '720px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ErrorIcon sx={{ fontSize: '48px', color: 'gray' }} />
        <Typography
          variant="body1"
          sx={{ margin: '5px 5px 20px 5px', fontSize: '24px', color: '#3C4043' }}
        >
          Oops! Something went wrong.
        </Typography>
        <Typography
          variant="body1"
          sx={{ margin: '5px', fontSize: '14px', color: '#3C4043' }}
        >
          This page didn&apos;t load Google Maps correctly. See the JavaScript console for technical details.
        </Typography>
      </Box>
    </Box>
  );
}
