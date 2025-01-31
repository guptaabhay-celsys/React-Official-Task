/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import ImageBox from "./PartnerImage";
import { currencyFormatter } from "./formatting";
import partner1 from '../assets/images/brand-1.jpg';
import partner2 from '../assets/images/brand-2.jpg';
import partner3 from '../assets/images/brand-3.jpg';
import partner4 from '../assets/images/brand-4.jpg';
import partner5 from '../assets/images/brand-5.jpg';
import ProductCard from "./ProductCard";
import { NavLink } from "react-router-dom";

type PartnersType = {
  cosmetic: React.CSSProperties,
  data: Product[],
  text: string
}

type Product = {
  id: string | number;
  name: string;
  price: number;
  image_url: string;
  gender: string;
};
 
export default function Partners({ cosmetic, data, text }: PartnersType) {
  const images = [
    {brand: partner1, link: 'https://www.adidas.co.in/outlet?cm_mmc=AdieSEM_BING-_-adidas-IN-Brand-Phrase-Bing-_-Search-_--_-dv:eCom-_-cn:adidas-IN-Brand-Phrase-Bing-Test-_-pc:BING&cm_mmc1=IN&cm_mmc2=PPC-Multiple--adidas-IN-Brand-Phrase-Bing-Test-Multiple-IN-EMEA-eCom-Paid_Search&msclkid=0d4b16db90831514a57c714193741177'}, 

    {brand: partner2, link: 'https://www.nike.com/in/?locale=en_IN&msockid=14d8c5a7ac72684e3a79d0b5addf699f'},

    {brand: partner3, link: 'https://www.gucci.com/us/en/ca/men/shoes-for-men-c-men-shoes'}, 

    {brand: partner4, link: 'https://www.merrell.com/US/en/home'}, 

    {brand: partner5, link: 'https://www.bing.com/search?q=puma&cvid=7eeaf632d5fb4943ab9d294d234d0e32&gs_lcrp=EgRlZGdlKgYIABAAGEAyBggAEAAYQDIGCAEQLhhAMgYIAhAAGEAyBggDEAAYQDIGCAQQABhAMgYIBRAAGEAyBggGEAAYQDIGCAcQABhAMgYICBAAGEDSAQg2NzYzajBqNKgCALACAA&FORM=ANAB01&PC=U531'}
    ];

  return (
    <Box
      sx={{
        padding: "98px 0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        ...cosmetic,
      }}
    >
      <Box sx={{ marginBottom: "90px", color: "rgba(0, 0, 0, 0.3)" }}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Rokkitt, Georgia, serif",
            fontSize: "20px",
            fontWeight: "700",
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          {text ? text : `Trusted Partners`}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: data.length > 0 ? 'repeat(4, 1fr)' : 'repeat(5, 1fr)',
          gap: '30px',
          justifyContent: 'center',
        }}
      >
        {data && data.length > 0 ? (
          data.map((product) => (
            <ProductCard
              key={product.id}
              product_id={product.id}
              image={product.image_url}
              name={product.name}
              price={product.price}
              currencyFormatter={currencyFormatter} quantity={0}/>
          ))
        ) : (
          images.map((image) => 
          <NavLink to={image.link} key={image.brand} >
          <ImageBox key={image.brand} image={image.brand} />
          </NavLink>
          )
        )}
      </Box>
    </Box>
  );
}
