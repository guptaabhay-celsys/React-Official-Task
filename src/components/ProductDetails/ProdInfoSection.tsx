import React, { useContext, useState } from "react";
import { Box, Typography, Button, IconButton, Alert, Snackbar, CircularProgress } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ShoppingCartOutlined } from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { currencyFormatter } from "../../util/formatting";
import ProdSize from "../../util/ProdSize";
import AuthContext from "../../context/AuthContext";
import { addItemToCart } from "../../store/cartSlice";
import { addItemToWishlist, deleteItemFromWishlist } from "../../store/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootCartState, RootWishlistState } from "../../types";
import { ProductDetailProps, ProductInfo } from "../../types";

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { id, name, description, price, image_url, available_sizes } = product;
  const { userInfo } = useContext(AuthContext);
  const dispatch = useDispatch();
  const authToken = localStorage.getItem('authToken')
  const wishlistItems = useSelector((state: RootWishlistState) => state.wishlist.items)
  const cartItems = useSelector((state: RootCartState) => state.cart.items)
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [loadingCart, setLoadingCart] = useState(false);
  const [notification, setNotification] = useState({ open: false, message: "" });
  const [loadingWishlist, setLoadingWishlist] = useState(false);

  useEffect(() => {
    const isProdPresent = wishlistItems.some((item) => item.product_id === id);
    setIsWishlisted(isProdPresent);
  }, [wishlistItems, id]);

  const handleAddToCart = async (product_id: string | number) => {
    setLoadingCart(true);
    const userId = userInfo?.id;
    const product = {
      product_id,
      name,
      price: Number(price),
      image: image_url,
      userId,
      quantity: 1,
    };

    try {
      const authToken = localStorage.getItem("authToken");

      const response = await fetch("http://localhost:3000/cart/add-to-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(product),
      });

      const data = await response.json();

      if (data.success) {
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


  const handleAddToWishlist = async () => {
    setLoadingWishlist(true);
    const userId = userInfo?.id;
    const product = { product_id: id, image: image_url, name, price, userId };
    try {
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
        setIsWishlisted(true);
        setNotification({
          open: true,
          message: "Product added to wishlist!",
        });
      } else {
        throw new Error(data.message || "Failed to add product to wishlist.");
      }
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    } finally {
      setLoadingWishlist(false);
    }
  };

  const handleRemoveFromWishlist = async () => {
    setLoadingWishlist(true);
    const userId = userInfo?.id;
    try {
      const response = await fetch(
        "http://localhost:3000/wishlist/remove-from-wishlist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify({ productId: id, userId }),
        }
      );

      const data = await response.json();

      if (data.success) {
        dispatch(deleteItemFromWishlist(id));
        setIsWishlisted(false);
        setNotification({
          open: true,
          message: "Product removed from wishlist!",
        });
      } else {
        throw new Error(data.message || "Failed to remove product from wishlist.");
      }
    } catch (error) {
      console.error("Error removing from wishlist:", error);
    } finally {
      setLoadingWishlist(false);
    }
  };

  const toggleWishlist = () => {
    if (isWishlisted) {
      handleRemoveFromWishlist();
    } else {
      handleAddToWishlist();
    }
  };

  const handleCloseNotification = () => {
    setNotification({ open: false, message: "" });
  };

  return (
    <Box sx={{ mb: 15 }}>
      <Box sx={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
        <Box
          sx={{
            flex: "2.5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            flexDirection: 'column'
          }}
        >
          <Box sx={{ position: "relative", width: "100%", height: "750px" }}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                border: "1px solid lightgray",
                backgroundImage: `url(${image_url})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <IconButton
                onClick={toggleWishlist}
                sx={{
                  position: "absolute",
                  bottom: "8px",
                  right: "8px",
                  color: isWishlisted ? "red" : "inherit",
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  borderRadius: "50%",
                }}
                disabled={loadingWishlist}
              >
                {loadingWishlist ? (
                  <CircularProgress size={24} sx={{ color: "red" }} />
                ) : isWishlisted ? (
                  <FavoriteIcon />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </IconButton>

            </Box>
          </Box>
        </Box>

        <Box sx={{ flex: "1", padding: "0 28px" }}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body1" sx={{ color: "#212529", mb: 1, mt: 2, fontSize: '18px' }}>
            {currencyFormatter.format(price)}
          </Typography>
          <Box>
            <StarIcon sx={{ color: "#616161", fontSize: "16px" }} />
            <StarIcon sx={{ color: "#616161", fontSize: "16px" }} />
            <StarIcon sx={{ color: "#616161", fontSize: "16px" }} />
            <StarIcon sx={{ color: "#616161", fontSize: "16px" }} />
            <StarHalfIcon sx={{ color: "#616161", fontSize: "16px" }} /> (74 Ratings)
          </Box>
          <Typography variant="body2" sx={{ mt: 2, mb: 2, color: "#909090", fontSize: '16px', letterSpacing: '1px', wordSpacing: '2px' }}>
            {description}
          </Typography>

          <Box sx={{ mt: 3, mb: 3, }}>
            <Typography sx={{ fontSize: '14px', mb: 1, color: '#212529' }}>SIZE</Typography>
            <ProdSize sizes={available_sizes} />
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#616161",
              borderRadius: "4px",
              color: "white",
              textTransform: "none",
              marginTop: "10px",
            }}
            onClick={() => handleAddToCart(id)}
            disabled={cartItems.some((item) => item.product_id === id)}
          >
            {loadingCart ? (
              <CircularProgress size={24} sx={{ color: "white", backgroundColor: "transparent" }} />
            ) : (
              <>
                <ShoppingCartOutlined />
                {cartItems.some((item) => item.product_id === id) ? "Product Added" : "Add to Cart"}
              </>
            )}
          </Button>


        </Box>
      </Box>

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
  )
};

export default ProductDetail;
