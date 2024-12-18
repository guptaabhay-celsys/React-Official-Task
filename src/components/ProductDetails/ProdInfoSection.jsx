import { Box, Typography, IconButton, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { currencyFormatter } from "../../util/formatting";
import ProdSize from "../../util/ProdSize";
import { cartActions } from "../../store/cartSlice";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useParams } from "react-router-dom";
import { wishlistActions } from "../../store/wishlistSlice";

export default function ProductDetail() {

  const products = useSelector((state) => state.products.products);
  const { Prodid } = useParams();
  const prod = products.find(prod => prod.id == Prodid)
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const isAdded = cartItems.some((cartItem) => cartItem.id === prod?.id);
  const isFavorited = useSelector((state) =>
    state.wishlist.items.some((item) => item.id === prod?.id)
  );

  if (!products.length) {
    return <Typography variant="h6">No Products Available</Typography>;
  }

  const handleAddToCart = (id) => {
    const matchedItem = products.find((item) => item.id === id);
    dispatch(
      cartActions.addItemToCart({
        id: matchedItem.id,
        name: matchedItem.name,
        price: matchedItem.price,
        image: matchedItem.image,
      })
    );
    navigate("/cart");
  };

  const toggleFavoriteHandler = () => {
    if (isFavorited) {
      dispatch(wishlistActions.deleteItemFromWishlist(prod.id));
    } else {
      dispatch(
        wishlistActions.addItemToWishlist({
          id: prod.id,
          image: prod.image,
          price: prod.price,
          name: prod.name,
        })
      );
      navigate("/wishlist");
    }
  };

  return (
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
                backgroundImage: `url(${prod.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
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
        </Box>
      </Box>

      <Box sx={{ flex: "1", padding: "0 28px" }}>
        <Typography variant="h6">{prod.name}</Typography>
        <Typography variant="body1" sx={{ color: "gray", mb: 1 }}>
          {currencyFormatter.format(prod.price)}
        </Typography>
        <Box>
          <StarIcon sx={{ color: "#616161", fontSize: "16px" }} />
          <StarIcon sx={{ color: "#616161", fontSize: "16px" }}/>
          <StarIcon sx={{ color: "#616161", fontSize: "16px" }}/>
          <StarIcon sx={{ color: "#616161", fontSize: "16px" }} />
          <StarHalfIcon sx={{ color: "#616161", fontSize: "16px" }} /> (74 Ratings)
        </Box>
        <Typography variant="body2" sx={{ mt: 2, mb: 2, color: "#666" }}>
          {prod.description || "Default product description."}
        </Typography>

        <ProdSize gap="2px" />

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#616161",
            borderRadius: "4px",
            color: "white",
            textTransform: "none",
            marginTop: "10px",
        }}
          onClick={() => handleAddToCart(prod.id)}
          disabled={isAdded}
        >
          <ShoppingCartOutlined />
          {isAdded ? "Product Added" : "Add to Cart"}
        </Button>
      </Box>
    </Box>
  );
}
