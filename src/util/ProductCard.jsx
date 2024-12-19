/* eslint-disable react/prop-types */
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { NavLink } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState, useEffect } from "react";
import { wishlistActions } from "../store/wishlistSlice";

const ProductCard = ({ id, image, name, price, currencyFormatter }) => {
  const dispatch = useDispatch();
  const isWishlisted = useSelector((state) =>
    state.wishlist.items.some((item) => item.id === id)
  );

  const [isFavorited, setIsFavorited] = useState(isWishlisted);
  const [notification, setNotification] = useState({ open: false, message: "" });

  const isAdded = useSelector((state) =>
    state.cart.items.some((item) => item.id === id)
  );

  const addToCartHandler = () => {
    if (!isAdded) {
      dispatch(
        cartActions.addItemToCart({
          id,
          image,
          name,
          price,
        })
      );
      showNotification("Product added to cart!");
    }
  };

  const toggleFavoriteHandler = () => {
    if (isFavorited) {
      dispatch(wishlistActions.deleteItemFromWishlist(id));
      showNotification("Product removed from wishlist!");
    } else {
      dispatch(
        wishlistActions.addItemToWishlist({
          id,
          image,
          price,
          name,
        })
      );
      showNotification("Product added to wishlist!");
    }
    setIsFavorited(!isFavorited);
  };

  const showNotification = (message) => {
    setNotification({ open: true, message });
  };

  const handleCloseNotification = () => {
    setNotification({ open: false, message: "" });
  };

  useEffect(() => {
    setIsFavorited(isWishlisted);
  }, [isWishlisted]);

  return (
    <>
      <Card
        key={id}
        sx={{
          borderRadius: "2px",
          border: "1px solid #e0e0e0",
          boxShadow: "none",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardActionArea
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "250px",
            }}
          >
            <NavLink to={`/product-details/${id}`}>
              <CardMedia
                component="img"
                image={image}
                alt={name}
                sx={{
                  height: "250px",
                  width: "100%",
                  objectFit: "cover",
                  backgroundPosition: "center",
                }}
              />
            </NavLink>
            <IconButton
              onClick={toggleFavoriteHandler}
              sx={{
                position: "absolute",
                bottom: "8px",
                right: "8px",
                color: isFavorited ? "red" : "inherit",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                borderRadius: "50%",
              }}
            >
              {isFavorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </Box>
          <CardContent
            sx={{
              flex: 1,
              textAlign: "center",
              fontFamily: "Rokkitt, Georgia, serif",
              padding: "21px",
              boxSizing: "border-box",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                lineHeight: "1.5",
                fontSize: "18px",
                color: "#000",
                textTransform: "uppercase",
                textWrap: "wrap",
                marginBottom: "8px",
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#000",
              }}
            >
              Price: {currencyFormatter.format(price)}
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
              onClick={addToCartHandler}
              disabled={isAdded}
            >
              {isAdded ? "Product Added" : "Add to Cart"}
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>

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
    </>
  );
};

export default ProductCard;
