import { Box, Typography } from "@mui/material";
import footerData from '../../data/footer.js';
import FavoriteIcon from '@mui/icons-material/Favorite';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

export default function Footer() {
  const { about, customer_care, information, news, contact_information } = footerData;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "calc(100% - 150px)",
        margin: "98px auto 30px auto",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: "100%",
          gap: "20px",
          paddingBottom: '98px',
          flexWrap: "nowrap",
          "@media (max-width: 768px)": {
            flexDirection: "column", 
            flexWrap: "wrap",
          },
        }}
      >

        <Box sx={{ flex: "1 1 20%", minWidth: "200px" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              marginBottom: "20px",
              fontSize: "18px",
              fontFamily: "Rokkitt, Georgia, serif",
              textTransform: "uppercase",
            }}
          >
            {about.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              fontFamily: "Montserrat, Arial, sans-serif",
              fontWeight: 300,
              color: "#595959",
              lineHeight: 1.8,
              wordWrap: "break-word",
            }}
          >
            {about.description}
          </Typography>
          <Box sx={{ display: "flex", gap: "14px", marginTop: "16px" }}>
            <XIcon sx={{ color: "#616161", fontSize: "24px", cursor: "pointer" }} />
            <FacebookIcon sx={{ color: "#616161", fontSize: "24px", cursor: "pointer" }} />
            <LinkedInIcon sx={{ color: "#616161", fontSize: "24px", cursor: "pointer" }} />
            <SportsBasketballIcon sx={{ color: "#616161", fontSize: "24px", cursor: "pointer" }} />
          </Box>
        </Box>

        <Box sx={{ flex: "1 1 20%", minWidth: "200px" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              marginBottom: "20px",
              fontSize: "18px",
              textTransform: "uppercase",
              fontFamily: "Rokkitt, Georgia, serif",
            }}
          >
            Customer Care
          </Typography>
          {customer_care.map((data, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{
                fontSize: "14px",
                fontFamily: "Montserrat, Arial, sans-serif",
                fontWeight: 300,
                color: "#595959",
                lineHeight: 1.8,
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              <a href={data.url} style={{ color: "#595959", textDecoration: "none" }}>
                {data.name}
              </a>
            </Typography>
          ))}
        </Box>

        <Box sx={{ flex: "1 1 20%", minWidth: "200px" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              marginBottom: "20px",
              fontSize: "18px",
              textTransform: "uppercase",
              fontFamily: "Rokkitt, Georgia, serif",
            }}
          >
            Information
          </Typography>
          {information.map((data, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{
                fontSize: "14px",
                fontFamily: "Montserrat, Arial, sans-serif",
                fontWeight: 300,
                color: "#595959",
                lineHeight: 1.8,
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              <a href={data.url} style={{ color: "#595959", textDecoration: "none" }}>
                {data.name}
              </a>
            </Typography>
          ))}
        </Box>

        <Box sx={{ flex: "1 1 20%", minWidth: "200px" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              marginBottom: "20px",
              fontSize: "18px",
              textTransform: "uppercase",
              fontFamily: "Rokkitt, Georgia, serif",
            }}
          >
            News
          </Typography>
          {news.map((data, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{
                fontSize: "14px",
                fontFamily: "Montserrat, Arial, sans-serif",
                fontWeight: 300,
                color: "#595959",
                lineHeight: 1.8,
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              <a href={data.url} style={{ color: "#595959", textDecoration: "none" }}>
                {data.name}
              </a>
            </Typography>
          ))}
        </Box>

        <Box sx={{ flex: "1 1 20%", minWidth: "200px" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              marginBottom: "20px",
              fontSize: "18px",
              textTransform: "uppercase",
              fontFamily: "Rokkitt, Georgia, serif",
            }}
          >
            Contact Information
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              fontFamily: "Montserrat, Arial, sans-serif",
              fontWeight: 300,
              color: "#595959",
              lineHeight: 1.8,
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            {contact_information.address}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              fontFamily: "Montserrat, Arial, sans-serif",
              fontWeight: 300,
              color: "#595959",
              lineHeight: 1.8,
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            {contact_information.phone}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              fontFamily: "Montserrat, Arial, sans-serif",
              fontWeight: 300,
              color: "#595959",
              lineHeight: 1.8,
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            {contact_information.email}
          </Typography>
        </Box>
      </Box>

      <Typography
        variant="body1"
        sx={{
          color: "#595959",
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        Copyright © 2024 All rights reserved | This template is made with
        <FavoriteIcon sx={{ verticalAlign: "middle", marginLeft: "4px" }} /> by Colorlib Demo Images: Unsplash, Pexels.com
      </Typography>
    </Box>
  );
}
