import { Box, Grid, Typography } from "@mui/material";
import footerData from '../../data/footer.js';
import FavoriteIcon from '@mui/icons-material/Favorite';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

export default function Footer() {
  const { about, customer_care, information, news, contact_information } = footerData;

  return (
    <Box sx={{
      padding: "98px 0px 0px 0px", 
      display: "flex",
      flexDirection: 'column',
      width: "100%",
    }}>
      <Grid container spacing={4} sx={{ display: "flex", justifyContent: 'space-evenly', paddingBottom: '56px'}}>

        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{
            fontWeight: "400",
            marginBottom: "20px",
            fontSize: '18px',
            fontFamily: 'Rokkitt, Georgia, serif',
            textTransform: 'uppercase',
          }}>
            {about.title}
          </Typography>
          <Typography variant="body2" sx={{
            fontSize: '14px',
            fontFamily: 'Montserrat, Arial, sans-serif',
            fontWeight: '300',
            color: '#595959',
            lineHeight: '1.8'
          }}>
            {about.description}
          </Typography>
          <Box sx={{ display: 'flex', gap: '14px', marginTop: '16px' }}>
            <XIcon sx={{ color: '#616161', fontSize: '24px', cursor: 'pointer' }} />
            <FacebookIcon sx={{ color: '#616161', fontSize: '24px', cursor: 'pointer' }} />
            <LinkedInIcon sx={{ color: '#616161', fontSize: '24px', cursor: 'pointer' }} />
            <SportsBasketballIcon sx={{ color: '#616161', fontSize: '24px', cursor: 'pointer' }} />
        </Box>
        </Grid>


        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{
            fontWeight: "400",
            marginBottom: "20px",
            fontSize: '18px',
            textTransform: 'uppercase',
            fontFamily: 'Rokkitt, Georgia, serif',
          }}>
            Customer Care
          </Typography>
          {customer_care.map((data, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{
                fontSize: '14px',
                fontFamily: 'Montserrat, Arial, sans-serif',
                fontWeight: '300',
                color: '#595959',
                lineHeight: '1.8',
                textTransform: 'uppercase',
                marginBottom: '10px'
              }}
            >
              <a href={data.url} style={{ color: '#595959', textDecoration: 'none' }}>
                {data.name}
              </a>
            </Typography>
          ))}
        </Grid>


        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{
            fontWeight: "400",
            marginBottom: "20px",
            fontSize: '18px',
            textTransform: 'uppercase',
            fontFamily: 'Rokkitt, Georgia, serif',
          }}>
            Information
          </Typography>
          {information.map((data, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{
                fontSize: '14px',
                fontFamily: 'Montserrat, Arial, sans-serif',
                fontWeight: '300',
                color: '#595959',
                lineHeight: '1.8',
                textTransform: 'uppercase',
                marginBottom: '10px'
              }}
            >
              <a href={data.url} style={{ color: '#595959', textDecoration: 'none' }}>
                {data.name}
              </a>
            </Typography>
          ))}
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{
            fontWeight: "400",
            marginBottom: "20px",
            fontSize: '18px',
            textTransform: 'uppercase',
            fontFamily: 'Rokkitt, Georgia, serif',
          }}>
            News
          </Typography>
          {news.map((data, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{
                fontSize: '14px',
                fontFamily: 'Montserrat, Arial, sans-serif',
                fontWeight: '300',
                color: '#595959',
                lineHeight: '1.8',
                textTransform: 'uppercase',
                marginBottom: '10px'
              }}
            >
              <a href={data.url} style={{ color: '#595959', textDecoration: 'none' }}>
                {data.name}
              </a>
            </Typography>
          ))}
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{
            fontWeight: "400",
            marginBottom: "20px",
            fontSize: '18px',
            textTransform: 'uppercase',
            fontFamily: 'Rokkitt, Georgia, serif',
          }}>
            Contact Information
          </Typography>
          <Typography variant="body2" sx={{
            fontSize: '14px',
            fontFamily: 'Montserrat, Arial, sans-serif',
            fontWeight: '300',
            color: '#595959',
            lineHeight: '1.8',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            {contact_information.address}<br />
            {contact_information.steet}
          </Typography>
          <Typography variant="body2" sx={{
            fontSize: '14px',
            fontFamily: 'Montserrat, Arial, sans-serif',
            fontWeight: '300',
            color: '#595959',
            lineHeight: '1.8',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            {contact_information.phone}
          </Typography>
          <Typography variant="body2" sx={{
            fontSize: '14px',
            fontFamily: 'Montserrat, Arial, sans-serif',
            fontWeight: '300',
            color: '#595959',
            lineHeight: '1.8',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            {contact_information.email}
          </Typography>
          <Typography variant="body2" sx={{
            fontSize: '14px',
            fontFamily: 'Montserrat, Arial, sans-serif',
            fontWeight: '300',
            color: '#595959',
            lineHeight: '1.8',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            {contact_information.website}
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="body1" sx={{color: '#595959', textAlign: 'center', padding: '28px 0px'}}>
      Copyright ©2024 All rights reserved | This template is made with <FavoriteIcon sx={{verticalAlign: 'middle'}} /> by Colorlib Demo Images: Unsplash , Pexels.com
      </Typography>
    </Box>
  );
}
