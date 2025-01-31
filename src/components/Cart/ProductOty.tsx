import { Box, Typography, IconButton, Snackbar, Alert, CircularProgress } from "@mui/material";
import { RemoveCircleOutline, AddCircleOutline, Close } from "@mui/icons-material";
import { currencyFormatter } from "../../util/formatting";
import { updateItemQuantity, deleteItemFromCart, RootState as RootCartState, setCart, CartState } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CouponSection from "./CouponSection";
import { useContext, useState, useEffect } from "react";
import { RootState } from "../../store/productsSlice";
import AuthContext from "../../context/AuthContext";

// eslint-disable-next-line react/prop-types
export default function ProductSection() {
  const products = useSelector((state: RootState) => state.products.products);
  // const [removedItems, setRemovedItems] = useState<Set<string | number>>(new Set());
  const cartItems = useSelector((state: RootCartState) => state.cart.items);
  const [isAdded, setIsAdded] = useState(false);
  const [notification, setNotification] = useState({ open: false, message: "" });
  const { userInfo } = useContext(AuthContext);
  const [error, setError] = useState<{ id: string | number | null; message: string }>({
    id: null,
    message: "",
  });
  const dispatch = useDispatch();
  const token = localStorage.getItem("authToken");
  // const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (cartItems.length > 0) {
//       setLoading(false);
//     }
//   }, [cartItems]);
//   useEffect(()=>{
// console.log(cartItems,'cartItems')
//   },[dispatch])

  const handleUpdateCart = async (id: string | number, quantity: number) => {
    try {
      const userId = userInfo?.id;
      const response = await fetch("http://localhost:3000/cart/update-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId: id, userId, quantity }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        dispatch(updateItemQuantity({ id, quantity }));
        showNotification("Cart updated successfully!");
        clearError();
      } else {
        console.error(result.message || "Failed to update cart");
        showNotification("Failed to update cart");
      }
    } catch (error) {
      console.error(error);
      showNotification("An error occurred while updating the cart.");
    }
  };

  const handleIncrease = (id: string | number) => {
    const maxQty = products.find(item => item.id === id)?.stock;
    const item = cartItems.find((item) => item.product_id === id)!;
    if (item && maxQty) {
      if (item.quantity + 1 > maxQty) {
        setError({ id, message: `Only ${maxQty} units available.` });
      } else {
        handleUpdateCart(id, item.quantity + 1);
      }
    }
  };

  const handleDecrease = async (id: string | number) => {
    const item = cartItems.find((item) => item.product_id === id)!;
    if (item) {
      const newQuantity = item.quantity - 1;
      if (newQuantity < 1) {
        try {
          const userId = userInfo?.id;
          const response = await fetch("http://localhost:3000/cart/remove-from-cart", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ productId: id, userId }),
          });

          const result = await response.json();

          if (response.ok && result.success) {
            dispatch(deleteItemFromCart(id));
            showNotification("Product removed from cart!");
          } else {
            console.error(result.message || "Failed to remove product from cart");
            showNotification("Failed to remove product from cart!");
          }
        } catch (error) {
          console.error(error);
          showNotification("An error occurred while removing the product.");
        }
      } else {
        handleUpdateCart(id, newQuantity);
      }
    }
  };

  const handleRemove = async (id: string | number) => {
    try {
      const userId = userInfo?.id;
      const response = await fetch("http://localhost:3000/cart/remove-from-cart", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId: id, userId }),
      });

      const data = await response.json();

      if (data.success) {
        dispatch(deleteItemFromCart(id));
        // setRemovedItems((prev) => new Set(prev).add(id));

        showNotification("Product removed from cart!");
       console.log(cartItems, 'these are cart items')
//-------------->
        // setCart((prevState: CartState) => {
        //   const updatedItems = prevState.items.filter(
        //     (item: { product_id: string | number }) => item.product_id !== id
        //   );

        //   const updatedTotalQuantity = updatedItems.reduce(
        //     (acc: any, item: { quantity: any }) => acc + item.quantity, 0
        //   );
        //   const updatedTotalAmount = updatedItems.reduce(
        //     (acc: number, item: { price: number; quantity: number }) => acc + (item.price * item.quantity), 0
        //   );
// ---->
          // console.log(updatedItems, 'these are updated items');
        //   return {
        //     ...prevState,
        //     items: updatedItems,
        //     totalQuantity: updatedTotalQuantity,
        //     totalAmount: updatedTotalAmount,
        //   };
        // });
      } else {
        console.error(data.message || "Failed to remove product from cart");
        showNotification("Failed to remove product from cart!");
      }
    } catch (error) {
      console.error(error);
      showNotification("An error occurred while removing the product.");
    }
  };

  const showNotification = (message: string) => {
    setNotification({ open: true, message });
  };

  const handleCloseNotification = () => {
    setNotification({ open: false, message: "" });
  };

  const clearError = () => {
    setError({ id: null, message: "" });
  };
console.log(cartItems,'cartItems');
  return (
    <Box sx={{ margin: "20px auto" }}>
    {cartItems.length > 0 ? (
        cartItems.map((item) => {
          const { name, price, image, quantity, product_id } = item;
          const total = price * quantity;

          // const isRemoved = removedItems.has(product_id);

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

                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <IconButton
                        onClick={() => handleDecrease(product_id)}
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
                        onClick={() => handleIncrease(product_id)}
                        sx={{ color: "#595959" }}
                      >
                        <AddCircleOutline />
                      </IconButton>
                    </Box>

                    {error.id === product_id && (
                      <Typography sx={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "4px", 
                        textAlign: "center",
                        wordWrap: "break-word",
                        maxWidth: "80px",
                        lineHeight: "1.2",
                        fontFamily: "Montserrat, Arial, sans-serif", }}>
                        {error.message}
                      </Typography>
                    )}
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: "Montserrat, Arial, sans-serif",
                      color: "#595959",
                    }}
                  >
                    {currencyFormatter.format(total)}
                  </Typography>

                  <IconButton onClick={() => handleRemove(product_id)} sx={{ color: "#595959" }}>
                    <Close />
                  </IconButton>
                </Box>
              </Box>
            
          );
        })
      ) : (
        <Typography sx={{ fontFamily: 'Montserrat,Arial, sans-serif', fontSize: '36px', textAlign: 'center', margin: '98px auto 196px auto', color: '#616161' }}>
          Your Cart Feels Light!
        </Typography>
      )}
      <Box sx={{ marginTop: '150px' }}>
        {cartItems.length > 0 ? <CouponSection /> : <></>}
      </Box>
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
