import { Box, Typography, IconButton } from "@mui/material";
import { RemoveCircleOutline, AddCircleOutline, Close } from "@mui/icons-material";
import { useState } from "react";
import image from '../../assets/images/item-3.jpg';
import { currencyFormatter } from "../../util/formatting";

// eslint-disable-next-line react/prop-types
export default function ProductSection({cosmetic}) {
  const [quantity, setQuantity] = useState(1); 
  const price = 100; 
  const total = price * quantity;

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1); 
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid lightgray",
        padding: "20px 4px",
        marginBottom: "104px",
        ...cosmetic
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
        <img
          src={image}
          alt="Product"
          style={{ width: "90px", height: "100px", marginRight: "20px" }} 
        />
        <Typography sx={{ fontSize: "16px", fontWeight: "normal", fontFamily: "Rokkitt, Georgia, serif" }}>
          Product Name
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", width: "51%",}}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ fontFamily: "Montserrat, Arial, sans-serif", color: '#595959' }}>
            {currencyFormatter.format(price)}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", justifyContent:'star' }}>
          <IconButton onClick={handleDecrease} sx={{ paddingLeft: '2', color: '#595959' }}>
            <RemoveCircleOutline />
          </IconButton>
          <Typography sx={{fontFamily: "Montserrat, Arial, sans-serif", color: '#595959' }}>{quantity}</Typography>
          <IconButton onClick={handleIncrease} sx={{ color: '#595959', paddingRight: '2' }}>
            <AddCircleOutline />
          </IconButton>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", marginRight: '30px' }}>
          <Typography sx={{ fontFamily: "Montserrat, Arial, sans-serif", color: '#595959' }}>
            {currencyFormatter.format(total)}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ color: "#595959", fontWeight: "normal" }}>
            <Close />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
