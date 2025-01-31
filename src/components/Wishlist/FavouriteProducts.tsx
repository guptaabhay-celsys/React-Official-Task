import { Box, Typography, IconButton, Button, Snackbar, Alert, CircularProgress } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { useContext, useState} from "react";
import { currencyFormatter } from "../../util/formatting";
import { deleteItemFromWishlist, ItemType, RootWishlistState } from "../../store/wishlistSlice";
import { addItemToCart, RootState } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

export default function ProductSection({ cosmetic }: { cosmetic: React.CSSProperties }) {
  const wishlistItems = useSelector((state: RootWishlistState) => state.wishlist.items);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  // const [wishlist, setWishlist] = useState(wishlistItems);
  const [notification, setNotification] = useState({ open: false, message: "" });
  const [loadingCart, setLoadingCart] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useContext(AuthContext);
  const authToken = localStorage.getItem('authToken');

  // useEffect(() => {
  //   setWishlist(wishlistItems);
  // }, [wishlistItems]);

  const handleRemove = async (id: string | number) => {
    try {
      if (wishlistItems.some((item) => item.product_id === id)) {
        const response = await fetch(
          "http://localhost:3000/wishlist/remove-from-wishlist",
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify({ productId: id, userId: userInfo?.id }),
          }
        );
  
        const data = await response.json();
  
        if (data.success) {
          // setWishlist((prevWishlist) => prevWishlist.filter((item) => item.product_id !== id));
          dispatch(deleteItemFromWishlist(id));
          setNotification({ open: true, message: "Product removed from wishlist!" });
        } else {
          throw new Error("Failed to remove item from wishlist.");
        }
      }
    } catch (error) {
      console.error("Error removing item from wishlist:", error);
      setNotification({
        open: true,
        message: "Error removing product from wishlist. Please try again.",
      });
    }
  };
  

  const addToCartHandler = async ( product : ItemType) => {
    setLoadingCart(true);
    console.log(product);
  
    const authToken = localStorage.getItem("authToken");
  
    try {

      const productWithUserId = {
        ...product,
        userId: userInfo?.id,
      };

      console.log(productWithUserId);
  
      const response = await fetch("http://localhost:3000/cart/add-to-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(productWithUserId),
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
  

  const handleCloseNotification = () => {
    setNotification({ open: false, message: "" });
  };

  return (
    <Box sx={{ margin: "20px auto", ...cosmetic }}>
      {wishlistItems.length > 0 ? (
        wishlistItems.map((item) => {
          const { name, price, image, product_id } = item;
          return (
            <Box
              key={product_id}
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
                    backgroundColor: "#616161",
                    borderRadius: "4px",
                    color: "white",
                    textTransform: "none",
                    marginTop: "10px",
                    width: "150px",
                    alignSelf: "center",
                  }}
                  onClick={() => addToCartHandler(item)}
                  disabled={loadingCart || cartItems.some((item) => item.product_id === product_id)}
                >
                  {loadingCart ? (
                    <CircularProgress size={24} sx={{ color: "white", backgroundColor: "transparent" }} />
                  ) : (
                    <>
                      {cartItems.some((item) => item.product_id === product_id)
                        ? "Product Added"
                        : "Add to Cart"}
                    </>
                  )}
                </Button>

                <IconButton
                  onClick={() => handleRemove(product_id)}
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