import { Box, Typography, IconButton, Button, Snackbar, Alert } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { currencyFormatter } from "../../util/formatting";
import { RootWishlistState, setWishlist } from "../../store/wishlistSlice";
import { cartActions, RootState } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";
import { deleteItemFromWishlistThunk } from "../../../backend/util/handleWishlist";

export default function ProductSection({ cosmetic }: { cosmetic: React.CSSProperties }) {
  const wishlistItems = useSelector((state: RootWishlistState) => state.wishlist.items);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [notification, setNotification] = useState({ open: false, message: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = async (id: string | number) => {
    try {
      await dispatch(deleteItemFromWishlistThunk({ productId: id, userId: 1 })).unwrap();

      const updatedWishlist = wishlistItems.filter(item => item.id !== id);
      console.log(updatedWishlist);
      dispatch(setWishlist({ items: updatedWishlist, totalQuantity: updatedWishlist.length }));
  
      setNotification({ open: true, message: "Product removed from Wishlist" });
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };
  

  const addToCartHandler = (id: string | number, image: string, name: string, price: number) => {
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

  const showNotification = (message: string) => {
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
            fontSize: "16px",
            fontWeight: "500",
            fontFamily: "Roboto, Arial, sans-serif",
            textAlign: "center",
            color: "#808080",
          }}
        >
          No Items Found
        </Typography>
      )}

      <Snackbar
        open={notification.open}
        autoHideDuration={1000}
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
