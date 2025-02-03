import { useSelector, useDispatch } from "react-redux";
import { useState, useContext, useEffect } from "react";
import {
  RootWishlistState,
  deleteItemFromWishlist,
  addItemToWishlist,
} from "../store/wishlistSlice";
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
  CircularProgress,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { NavLink } from "react-router-dom";
import { addItemToCart } from "../store/cartSlice";
import { RootState as RootCartState } from "../store/cartSlice";
import AuthContext from "../context/AuthContext";

type ProdCardType = {
  product_id: string | number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  currencyFormatter: Intl.NumberFormat;
};

const ProductCard = ({
  product_id,
  image,
  name,
  price,
  quantity,
  currencyFormatter,
}: ProdCardType) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
  });
  const [loadingCart, setLoadingCart] = useState(false);
  const [loadingWishlist, setLoadingWishlist] = useState(false);
  const dispatch = useDispatch();
  const wishlistItems = useSelector(
    (state: RootWishlistState) => state.wishlist.items
  );
  const cartItems = useSelector((state: RootCartState) => state.cart.items);
  const { userInfo } = useContext(AuthContext);

  // useEffect(() => {
  //   const isProdPresent = wishlistItems.some(
  //     (item) => item.product_id === product_id
  //   );
  //   setIsFavorited(isProdPresent);
  // }, [wishlistItems, product_id]);

  const addToCartHandler = async () => {
    setLoadingCart(true);
    const userId = userInfo?.id;
    const product = {
      product_id,
      name,
      price: Number(price),
      image,
      userId,
      quantity: 1,
    };

    const authToken = localStorage.getItem("authToken");

    try {
      const response = await fetch("http://localhost:3000/cart/add-to-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(product),
      });

      const data = await response.json();
      console.log(data);
      if (data.success) {
        console.log(product);
        dispatch(addItemToCart(product));
        setNotification({
          open: true,
          message: "Product added to cart successfully!",
        });
      } else {
        throw new Error(data.message || "Failed to add product to cart.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      setNotification({
        open: true,
        message: "Error adding product to cart. Please try again.",
      });
    } finally {
      setLoadingCart(false);
    }
  };

  const toggleFavoriteHandler = async () => {
    setLoadingWishlist(true);
    const userId = userInfo?.id;
    const product = { product_id, image, name, price, userId };
    const authToken = localStorage.getItem("authToken");

    try {
      if (wishlistItems.some(item => item.product_id === product_id)) {
        const response = await fetch(
          "http://localhost:3000/wishlist/remove-from-wishlist",
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify({ productId: product_id, userId }),
          }
        );

        const data = await response.json();

        if (data.success) {
          dispatch(deleteItemFromWishlist(product_id));
          setIsFavorited(false);
          setNotification({
            open: true,
            message: "Product removed from wishlist!",
          });
        } else {
          throw new Error(data.message || "Failed to remove product from wishlist.");
        }
      } else {
        const response = await fetch(
          "http://localhost:3000/wishlist/add-to-wishlist",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify(product),
          }
        );

        const data = await response.json();

        if (data.success) {
          dispatch(addItemToWishlist(product));
          setIsFavorited(true);
          setNotification({
            open: true,
            message: "Product added to wishlist!",
          });
        } else {
          throw new Error(data.message || "Failed to add product to wishlist.");
        }
      }
    } catch (error) {
      console.error("Error toggling wishlist status:", error);
      setNotification({
        open: true,
        message: "Error updating wishlist. Please try again.",
      });
    } finally {
      setLoadingWishlist(false);
    }
  };

  const handleCloseNotification = () => {
    setNotification({ open: false, message: "" });
  };

  return (
    <>
      <Card
        key={product_id}
        sx={{
          borderRadius: "2px",
          border: "1px solid #e0e0e0",
          boxShadow: "none",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <CardActionArea
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "250px",
              overflow: "hidden",
            }}
          >
            <NavLink to={`/product-details/${product_id}`}>
              <CardMedia
                component="img"
                image={image}
                alt={name}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
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
                color: wishlistItems.some(item => item.product_id === product_id) ? "red" : "inherit",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                borderRadius: "50%",
              }}
              disabled={loadingWishlist}
            >
              {loadingWishlist ? (
                <CircularProgress size={24} sx={{ color: "red" }} />
              ) : wishlistItems.some(item => item.product_id === product_id) ? (
                <FavoriteIcon />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
          </Box>
          <CardContent
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "center",
              fontFamily: "Rokkitt, Georgia, serif",
              padding: "21px",
              boxSizing: "border-box",
              minHeight: "150px",
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
                marginBottom: "8px",
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#000" }}
            >
              Price: {currencyFormatter.format(price)}
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#616161",
                borderRadius: "4px",
                color: "white",
                textTransform: "none",
                marginTop: "10px",
                width: "150px",
                alignSelf: "center",
              }}
              onClick={() => addToCartHandler()}
              disabled={loadingCart || cartItems.some((item) => item.product_id === product_id)}
            >
              {loadingCart ? (
                <CircularProgress size={24} sx={{ color: "white", backgroundColor: "transparent" }} />
              ) : (
                <>
                  {cartItems.some((item) => item.product_id === product_id) ? "Product Added" : "Add to Cart"}
                </>
              )}
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>

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
    </>
  );
};

export default ProductCard;
