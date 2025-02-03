import { useContext, useState } from "react";
import { currencyFormatter } from "../../util/formatting";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";
import { setCart } from "../../store/cartSlice";
import {
  Box,
  Typography,
  Grid,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Checkbox,
  FormControlLabel,
  Table,
  TableCell,
  TableRow,
  Divider,
  TableBody,
  Radio,
  Button
} from "@mui/material";
import AuthContext from "../../context/AuthContext";

const commonTextStyle = { fontSize: '14px', color: '#909090' };
const tableCellStyle = { fontWeight: '300', ...commonTextStyle };

export default function BillingSection() {
  const [formData, setFormData] = useState({
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    secondAddress: "",
    city: "",
    state: "",
    zipCode: "",
    email: "",
    phone: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  console.log(cartItems);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const discount = totalAmount * 0.1;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useContext(AuthContext);
  const authToken = localStorage.getItem("authToken");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const isFormValid = () => {
    return (
      Object.values(formData).every((value) => value.trim() !== "") &&
      paymentMethod !== "" &&
      termsChecked
    );
  };

  const handlePlaceOrder = async () => {
    if (isFormValid()) {
      try {
        const userId = userInfo?.id;
        const billingAddress = `${formData.firstName} ${formData.lastName}, ${formData.address}, ${formData.secondAddress}, ${formData.state}, ${formData.zipCode}, ${formData.country}, ${formData.phone}`;
        const orderPromises = cartItems.map((item) => {
          const orderData = {
            user_id: userId,
            product_id: item.product_id,
            quantity: item.quantity,
            total_price: item.quantity * item.price,
            product_name: item.name,
            billing_address: billingAddress,
            status: "order placed",
          };
          
          return fetch("http://localhost:3000/orders/place-order", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify(orderData),
          });
        });
  
        const responses = await Promise.all(orderPromises);
        if (responses.every((res) => res.ok)) {
          const productUpdateData = cartItems.map(item => ({
            productId: item.product_id,
            quantity: item.quantity
          }));
  
          const updateStockResponse = await fetch("http://localhost:3000/update-quantity", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify({ products: productUpdateData })
          });
  
          if (updateStockResponse.ok) {
            dispatch(setCart({ items: [], totalAmount: 0, totalQuantity: 0 }));
            for (let item of cartItems) {
              await fetch("http://localhost:3000/cart/remove-from-cart", {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${authToken}`,
                },
                body: JSON.stringify({ productId: item.product_id, userId }),
              });
            }
            navigate('/order-complete');
          } else {
            alert("Failed to update stock.");
          }
        } else {
          alert("Some orders failed to be placed. Please try again.");
        }
      } catch (error) {
        console.error("Error placing order:", error);
        alert("Failed to place order. Please try again.");
      }
    } else {
      alert("Please fill out the form, select a payment method, and accept the terms.");
    }
  };  
  
  return (
    <Box sx={{ display: "flex", gap: "20px", marginBottom: "226px" }}>
      {/* Register Form Section */}
      <Box
        sx={{
          padding: '28px',
          backgroundColor: 'whitesmoke',
          fontFamily: 'Montserrat, Arial, sans-serif',
          flex: '2',
          minHeight: '720px',
        }}
      >
        <Typography
          variant="h4"
          color="initial"
          sx={{
            marginBottom: '40px',
            fontSize: '20px',
            fontFamily: 'Rokkitt, Georgia, serif',
            fontWeight: '400',
          }}
        >
          BILLING DETAILS
        </Typography>

        <FormControl sx={{ width: "100%", marginBottom: "30px" }}>
          <InputLabel
            id="country-select-label"
            sx={{
              color: "#d0d0d0",
              fontSize: "13px",
              top: "-6px",
              textTransform: "uppercase",
            }}
          >
            Select Country
          </InputLabel>
          <Select
            labelId="country-select-label"
            sx={{
              backgroundColor: 'white',
              borderRadius: '4px',
              padding: '12px',
              boxShadow: 'none',
              height: '55px',
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '&:hover:not(.Mui-disabled)': {
                boxShadow: 'none',
              },
              '&:focus-within': {
                boxShadow: 'none',
              },
            }}
            value={formData.country}
            onChange={(e) => handleInputChange("country", e.target.value)}
          >
            <MenuItem value="" disabled>
              Select Country
            </MenuItem>
            <MenuItem value="India">India</MenuItem>
            <MenuItem value="United States">United States</MenuItem>
            <MenuItem value="Australia">Australia</MenuItem>
          </Select>
        </FormControl>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              placeholder="YOUR FIRST NAME"
              fullWidth
              sx={{
                backgroundColor: 'white',
                borderRadius: '4px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { border: 'none' },
                  '&:hover fieldset': { border: 'none' },
                  '&.Mui-focused fieldset': { border: 'none' },
                },
                '& .MuiInputBase-input::placeholder': {
                  fontSize: '13px', 
                  color: '#909090'
                },
              }}
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              placeholder="YOUR LAST NAME"
              fullWidth
              sx={{
                backgroundColor: 'white',
                fontSize: '13px',
                borderRadius: '4px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { border: 'none' },
                  '&:hover fieldset': { border: 'none' },
                  '&.Mui-focused fieldset': { border: 'none' },
                },
                '& .MuiInputBase-input::placeholder': {
                  fontSize: '13px', 
                  color: '#909090'
                },
              }}
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
            />
          </Grid>
        </Grid>

        <TextField
          placeholder="ENTER YOUR ADDRESS"
          fullWidth
          sx={{
            marginTop: "30px",
            backgroundColor: 'white',
            borderRadius: '4px',
            '& .MuiOutlinedInput-root': {
              '& fieldset': { border: 'none' },
              '&:hover fieldset': { border: 'none' },
              '&.Mui-focused fieldset': { border: 'none' },
            },
            '& .MuiInputBase-input::placeholder': {
              fontSize: '13px', 
              color: '#909090'
            },
          }}
          value={formData.address}
          onChange={(e) => handleInputChange("address", e.target.value)}
        />

        <TextField
          placeholder="SECOND ADDRESS"
          fullWidth
          sx={{
            marginTop: "30px",
            backgroundColor: 'white',
            borderRadius: '4px',
            '& .MuiOutlinedInput-root': {
              '& fieldset': { border: 'none' },
              '&:hover fieldset': { border: 'none' },
              '&.Mui-focused fieldset': { border: 'none' },
            },
            '& .MuiInputBase-input::placeholder': {
              fontSize: '13px', 
              color: '#909090'
            },
          }}
          value={formData.secondAddress}
          onChange={(e) => handleInputChange("secondAddress", e.target.value)}
        />

        <TextField
          placeholder="TOWN/CITY"
          fullWidth
          sx={{
            marginTop: "30px",
            backgroundColor: 'white',
            borderRadius: '4px',
            '& .MuiOutlinedInput-root': {
              '& fieldset': { border: 'none' },
              '&:hover fieldset': { border: 'none' },
              '&.Mui-focused fieldset': { border: 'none' },
            },
            '& .MuiInputBase-input::placeholder': {
              fontSize: '13px', 
              color: '#909090'
            },
          }}
          value={formData.city}
          onChange={(e) => handleInputChange("city", e.target.value)}
        />

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              placeholder="STATE/PROVINCE"
              fullWidth
              sx={{
                marginTop: "30px",
                backgroundColor: 'white',
                borderRadius: '4px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { border: 'none' },
                  '&:hover fieldset': { border: 'none' },
                  '&.Mui-focused fieldset': { border: 'none' },
                },
                '& .MuiInputBase-input::placeholder': {
                  fontSize: '13px', 
                  color: '#909090'
                },
              }}
              value={formData.state}
              onChange={(e) => handleInputChange("state", e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              placeholder="POSTAL CODE"
              fullWidth
              sx={{
                marginTop: "30px",
                backgroundColor: 'white',
                borderRadius: '4px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { border: 'none' },
                  '&:hover fieldset': { border: 'none' },
                  '&.Mui-focused fieldset': { border: 'none' },
                },
                '& .MuiInputBase-input::placeholder': {
                  fontSize: '13px', 
                  color: '#909090'
                },
              }}
              value={formData.zipCode}
              onChange={(e) => handleInputChange("zipCode", e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              placeholder="YOUR EMAIL ADDRESS"
              fullWidth
              sx={{
                marginTop: "30px",
                backgroundColor: 'white',
                borderRadius: '4px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { border: 'none' },
                  '&:hover fieldset': { border: 'none' },
                  '&.Mui-focused fieldset': { border: 'none' },
                },
                '& .MuiInputBase-input::placeholder': {
                  fontSize: '13px', 
                  color: '#909090'
                },
              }}
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              placeholder="YOUR PHONE NUMBER"
              fullWidth
              sx={{
                marginTop: "30px",
                backgroundColor: 'white',
                borderRadius: '4px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { border: 'none' },
                  '&:hover fieldset': { border: 'none' },
                  '&.Mui-focused fieldset': { border: 'none' },
                },
                '& .MuiInputBase-input::placeholder': {
                  fontSize: '13px', 
                  color: '#909090'
                },
              }}
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', padding: '0px 15px' }}>
        <Box sx={{ padding: "28px 42px", width: '100%', minWidth: '300px', backgroundColor: '#f0f0f0', maxWidth: '400px' }}>
          <Typography  variant="h4" color="initial" sx={{marginBottom: '40px', fontSize: '20px', fontFamily: 'Rokkitt, Georgia, serif', fontWeight: '400'}}>CART TOTAL</Typography>
          <Table sx={{ borderCollapse: "collapse", "& .MuiTableCell-root": { borderBottom: "none", padding: "4px 0px" } }}>
            <TableBody>
              {cartItems.length > 0 && cartItems.map(item => (
                <TableRow key={item.product_id || item.name}>
                  <TableCell sx={tableCellStyle}>
                    <Typography variant="body1" sx={commonTextStyle}>
                      {item.quantity} X {item.name}
                    </Typography>
                  </TableCell>
                  <TableCell align="right" sx={{ textAlign: "center", fontSize: '14px' }}>
                    <Typography variant="body1" sx={{ fontWeight: 'normal', color: '#909090', fontSize: '14px' }}>
                      {currencyFormatter.format(item.totalPrice)}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell colSpan={2}><Divider sx={{ margin: "0 0 5px 0" }} /></TableCell>
              </TableRow>

              <TableRow>
                <TableCell sx={tableCellStyle}>
                  <Typography variant="body1" sx={{ fontWeight: 'normal', color: '#909090', fontSize: '14px !important' }}>Subtotal</Typography>
                </TableCell>
                <TableCell align="right" sx={{ textAlign: "center" }}>
                  <Typography variant="body1" sx={{ fontWeight: 'normal', color: '#909090', fontSize: '14px' }}>
                    {currencyFormatter.format(totalAmount)}
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={2}><Divider sx={{ margin: "0 0 5px 0" }} /></TableCell>
              </TableRow>

              <TableRow>
                <TableCell sx={tableCellStyle}>
                  <Typography variant="body1" sx={{ fontWeight: 'normal', color: '#909090', fontSize: '14px !important' }}>Discount</Typography>
                </TableCell>
                <TableCell align="right" sx={{ textAlign: "center" }}>
                  <Typography variant="body1" sx={{ fontWeight: 'normal', color: '#909090', fontSize: '14px' }}>
                    {currencyFormatter.format(discount)}
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={2}><Divider sx={{ margin: "0 0 5px 0" }} /></TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <Typography variant="body1" sx={{ fontWeight: 'normal', color: '#909090', fontSize: '14px !important' }}>
                    Order Total
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1" sx={{ fontWeight: 'normal', color: '#909090', fontSize: '14px !important' }}>
                    {currencyFormatter.format(totalAmount - discount)}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>


        {/* Payment Section */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: "28px 42px", minWidth: '300px', maxWidth: '400px', backgroundColor: '#f0f0f0' }}>
          <Typography sx={{ fontSize: '20px', marginBottom: '20px', color: 'black', fontFamily: 'Rokkit, Georgia, serif' }}>
            PAYMENT METHODS
          </Typography>

          <FormControlLabel
            sx={commonTextStyle}
            control={
              <Radio
                sx={{ color: '#909090 !important' }}
                checked={paymentMethod === "Credit Card"}
                onChange={() => setPaymentMethod("Credit Card")}
              />
            }
            label="Credit Card"
          />
          <FormControlLabel
            sx={commonTextStyle}
            control={
              <Radio
                sx={{ color: '#909090 !important' }}
                checked={paymentMethod === "PayPal"}
                onChange={() => setPaymentMethod("PayPal")}
              />
            }
            label="PayPal"
          />
          <FormControlLabel
            sx={commonTextStyle}
            control={
              <Radio
                sx={{ color: '#909090 !important' }}
                checked={paymentMethod === "Bank Transfer"}
                onChange={() => setPaymentMethod("Bank Transfer")}
              />
            }
            label="Bank Transfer"
          />

          <FormControlLabel
            sx={commonTextStyle}
            control={
              <Checkbox
                sx={{ color: '#909090 !important' }}
                checked={termsChecked}
                onChange={(e) => setTermsChecked(e.target.checked)}
              />
            }
            label="I accept the terms and conditions"
          />
        </Box>

        <Button
          variant="contained"
          disabled={isPlacingOrder}
          style={{ fontSize: '14px', padding: '8px 20px', textTransform: 'none', color: '#fff', border: 'none', cursor: 'pointer', background: '#616161', transition: 'all 0.5s ease', ':hover': { background: 'black' }, borderRadius: '50px' }}
          onClick={handlePlaceOrder}
        >
          {isPlacingOrder ? 'Placing Order...' : 'Place Order'}
        </Button>
      </Box>
    </Box>
  );
}
