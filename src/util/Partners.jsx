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

 
export default function Partners({ cosmetic, data, text }) {
  const images = [partner1, partner2, partner3, partner4, partner5];

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
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '30px',
          justifyContent: 'center',
        }}
      >
        {data && data.length > 0 ? (
          data.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              currencyFormatter={currencyFormatter}
            />
          ))
        ) : (
          images.map((image, index) => <ImageBox key={index} image={image} />)
        )}
      </Box>
    </Box>
  );
}
