import { Box, Typography, IconButton, Button, Snackbar, Alert } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { currencyFormatter } from "../../util/formatting";
import { wishlistActions } from "../../store/wishlistSlice";
import { cartActions } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ProductSection({ cosmetic }) {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const cartItems = useSelector((state) => state.cart.items);
  const [notification, setNotification] = useState({ open: false, message: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleRemove = (id) => {
    dispatch(wishlistActions.deleteItemFromWishlist(id));
    showNotification("Product removed from wishlist!");
  };

  const addToCartHandler = (id, image, name, price) => {
    const isAdded = cartItems.some((cartItem) => cartItem.id === id);
    if (!isAdded) {
      dispatch(
        cartActions.addItemToCart({
          id,
          image,
          name,
          price,
        })
      );
      navigate("/cart");
    }
  };


  const showNotification = (message) => {
    setNotification({ open: true, message });
  };

  const handleCloseNotification = () => {
    setNotification({ open: false, message: "" });
  };


  return (
    <Box sx={{ margin: "20px auto", ...cosmetic }}>
      {wishlistItems.length > 0 ? (
        wishlistItems.map((item) => {
          const { id, name, price, image } = item;

          const isAdded = cartItems.some((cartItem) => cartItem.id === id);

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
                  style={{
                    width: "90px",
                    height: "100px",
                    marginRight: "20px",
                  }}
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

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: isAdded ? "#bdbdbd" : "#616161",
                    borderRadius: "4px",
                    color: "white",
                    textTransform: "none",
                    marginTop: "10px",
                  }}
                  onClick={() => addToCartHandler(id, image, name, price)}
                  disabled={isAdded}
                >
                  {isAdded ? "Product Added" : "Add to Cart"}
                </Button>

                <IconButton
                  onClick={() => handleRemove(id)}
                  sx={{ color: "#595959" }}
                >
                  <Close />
                </IconButton>
              </Box>
            </Box>
          );
        })
      ) : (
        <Typography
          sx={{
            fontFamily: "Montserrat,Arial, sans-serif",
            fontSize: "36px",
            textAlign: "center",
            margin: "98px auto 196px auto",
            color: "#616161",
          }}
        >
          No Products Are Wishlisted Yet!
        </Typography>
      )}


      <Snackbar
        open={notification.open}
        autoHideDuration={3000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseNotification}
          severity="success"
          sx={{ width: "100%" }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
