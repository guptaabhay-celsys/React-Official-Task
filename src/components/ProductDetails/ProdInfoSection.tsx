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
import { RootWishlistState, addItemToWishlist, deleteItemFromWishlist } from "../../store/wishlistSlice";
import { RootState as RootCartState } from "../../store/cartSlice";
import { useEffect, useState } from "react";


type Product = {
  id: number;
  name: string;
  price: number;
  image_url: string;
  gender: string;
  description: string
  available_sizes: number[]
};

export default function ProductDetail() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch('http://localhost:3000/products');
          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }
          const data: Product[] = await response.json();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, []);
  const { Prodid } = useParams();
  const prod = products.find((prod: { id: string | number; }) => prod.id == Prodid)
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootCartState) => state.cart.items);

  const isAdded = cartItems.some((cartItem: { id: any; }) => cartItem.id === prod?.id);
  const isFavorited = useSelector((state: RootWishlistState) =>
    state.wishlist.items.some((item: { id: any; }) => item.id === prod?.id)
  );

  if (!products.length) {
    return <Typography variant="h6">No Products Available</Typography>;
  }

  const handleAddToCart = (id: any) => {
    const matchedItem = products.find((item: { id: any; }) => item.id === id)!;
    dispatch(
      cartActions.addItemToCart({
        id: matchedItem.id,
        name: matchedItem.name,
        price: matchedItem.price,
        image: matchedItem.image_url,
      })
    );
    navigate("/cart");
  };

  const toggleFavoriteHandler = () => {
    if (isFavorited && prod) {
      dispatch(deleteItemFromWishlist(prod.id));
    } else {
      dispatch(
        addItemToWishlist({
          id: prod?.id,
          image: prod?.image_url,
          price: prod?.price,
          name: prod?.name,
        })
      );

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
              backgroundImage: `url(${prod?.image_url})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
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
        <Typography variant="h6">{prod?.name}</Typography>
        <Typography variant="body1" sx={{ color: "gray", mb: 1 }}>
          {prod && currencyFormatter.format(prod.price)}
        </Typography>
        <Box>
          <StarIcon sx={{ color: "#616161", fontSize: "16px" }} />
          <StarIcon sx={{ color: "#616161", fontSize: "16px" }}/>
          <StarIcon sx={{ color: "#616161", fontSize: "16px" }}/>
          <StarIcon sx={{ color: "#616161", fontSize: "16px" }} />
          <StarHalfIcon sx={{ color: "#616161", fontSize: "16px" }} /> (74 Ratings)
        </Box>
        <Typography variant="body2" sx={{ mt: 2, mb: 2, color: "#666" }}>
           {prod && prod.description}
        </Typography>

        <ProdSize sizes = {prod?.available_sizes} />

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#616161",
            borderRadius: "4px",
            color: "white",
            textTransform: "none",
            marginTop: "10px",
          }}
          onClick={() => handleAddToCart(prod?.id)}
          disabled={isAdded}
        >
          <ShoppingCartOutlined />
          {isAdded ? "Product Added" : "Add to Cart"}
        </Button>
      </Box>
    </Box>
  );
}
