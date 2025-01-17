import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { setWishlist, RootWishlistState } from "../store/wishlistSlice";
import {
  addItemToWishlistThunk,
  deleteItemFromWishlistThunk,
} from "../../backend/util/handleWishlist";
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
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { NavLink } from "react-router-dom";

type ProdCardType = {
  id: string | number;
  image: string;
  name: string;
  price: number;
  currencyFormatter: Intl.NumberFormat;
};

const ProductCard = ({ id, image, name, price, currencyFormatter }: ProdCardType) => {
  const [notification, setNotification] = useState({ open: false, message: "" });
  const [isFavorited, setIsFavorited] = useState(false);

  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootWishlistState) => state.wishlist.items);

  useEffect(() => {
    setIsFavorited(wishlistItems.some((item) => item.product_id === id));
  }, [wishlistItems, isFavorited]);

  useEffect(() => {
    const fetchWishlist = async () => {
      const userId = 1;
      try {
        const response = await fetch(`http://localhost:3000/wishlist/products?userId=${userId}`);
        if (!response.ok) throw new Error("Failed to fetch wishlist");
        const data = await response.json();
        console.log(data.data);
        dispatch(setWishlist({ items: data.data, totalQuantity: data.data.length }));
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };
  
    fetchWishlist();
  }, [dispatch]); 

  const toggleFavoriteHandler = async () => {
    const userId = 1;
    const product = { id, image, name, price, userId };
  
    try {
      if (wishlistItems.some(item => item.product_id === id)) {
        await dispatch(deleteItemFromWishlistThunk({ productId: id, userId })).unwrap();
  
        const updatedWishlist = wishlistItems.filter(item => item.product_id !== id);
        dispatch(setWishlist({ items: updatedWishlist, totalQuantity: updatedWishlist.length }));
  
        setNotification({ open: true, message: "Product removed from wishlist!" });
        setIsFavorited(false);
      } else {
        await dispatch(addItemToWishlistThunk(product)).unwrap();
  
        const updatedWishlist = [...wishlistItems, product];
        dispatch(setWishlist({ items: updatedWishlist, totalQuantity: updatedWishlist.length }));
  
        setNotification({ open: true, message: "Product added to wishlist!" });
        setIsFavorited(true);
      }
    } catch (error) {
      console.error(isFavorited ? "Failed to remove from wishlist:" : "Failed to add to wishlist:", error);
      setNotification({ open: true, message: `Failed to ${isFavorited ? "remove" : "add"} product from wishlist.` });
    }
  };
  

  const handleCloseNotification = () => {
    setNotification({ open: false, message: "" });
  };

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
          <Box sx={{ position: "relative", width: "100%", height: "250px", overflow: "hidden" }}>
            <NavLink to={`/product-details/${id}`}>
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
                color: isFavorited ? "red" : "inherit",
                backgroundColor: "rgba(68, 68, 68, 0.28)",
                borderRadius: "50%",
              }}
            >
              {wishlistItems.some(item => item.product_id === id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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
            <Typography variant="body2" sx={{ fontSize: "18px", color: "#000" }}>
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
              onClick={() => {}}
            >
              Add to Cart
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
        <Alert onClose={handleCloseNotification} severity="success" sx={{ width: "100%" }}>
          {notification.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProductCard;
