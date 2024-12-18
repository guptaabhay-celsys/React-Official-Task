import { Box, Typography, IconButton } from "@mui/material";
import { RemoveCircleOutline, AddCircleOutline, Close } from "@mui/icons-material";
import { currencyFormatter } from "../../util/formatting";
import { cartActions } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CouponSection from "./CouponSection";

// eslint-disable-next-line react/prop-types
export default function ProductSection({ cosmetic }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrease = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      dispatch(
        cartActions.addItemToCart({
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
        })
      );
    }
  };

  const handleDecrease = (id) => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const handleRemove = (id) => {
    dispatch(cartActions.deleteItemFromCart(id)); 
  };

  return (
    <Box sx={{ margin: "20px auto", ...cosmetic}}>
      {cartItems.length > 0 ? cartItems.map((item) => {
        const { id, name, price, image, quantity } = item;
        const total = price * quantity;

        return (
          <Box
            key={id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid lightgray",
              padding: "20px 0",
              marginBottom: "20px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
              <img
                src={image}
                alt={name || "Product"}
                style={{ width: "90px", height: "100px", marginRight: "20px" }}
              />
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  fontFamily: "Rokkitt, Georgia, serif",
                }}
              >
                {name || "Product Name"}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "50%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  color: "#595959",
                }}
              >
                {currencyFormatter.format(price)}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  onClick={() => handleDecrease(id)}
                  sx={{ color: "#595959" }}
                >
                  <RemoveCircleOutline />
                </IconButton>
                <Typography
                  sx={{
                    fontFamily: "Montserrat, Arial, sans-serif",
                    color: "#595959",
                    margin: "0 10px",
                  }}
                >
                  {quantity}
                </Typography>
                <IconButton
                  onClick={() => handleIncrease(id)}
                  sx={{ color: "#595959" }}
                >
                  <AddCircleOutline />
                </IconButton>
              </Box>

              <Typography
                sx={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  color: "#595959",
                }}
              >
                {currencyFormatter.format(total)}
              </Typography>
              
              <IconButton onClick={() => handleRemove(id)} sx={{ color: "#595959" }}>
                <Close />
              </IconButton>
            </Box>
          </Box>
        );
      }) : 
      <Typography sx={{fontFamily: 'Montserrat,Arial, sans-serif', fontSize: '36px', textAlign: 'center', margin: '98px auto 196px auto', color: '#616161'}}>
        Your Cart Feels Light!
        </Typography>
      }

      <Box sx={{marginTop: '150px'}}>
      {cartItems.length > 0 ? <CouponSection /> : <></>}
      </Box>
    </Box>
  );
}
