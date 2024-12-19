import { Box, Table, TableBody, TableRow, TableCell, Typography, Divider, FormControlLabel, Checkbox, Radio } from "@mui/material";
import { useState } from "react";
import { currencyFormatter } from "../../util/formatting";
import ShopButton from "../../util/Button";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function PaymentSection() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  const discount = totalAmount * 0.1;

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const commonTextStyle = { fontSize: '14px', color: '#909090' };
  const tableCellStyle = { fontWeight: '300', ...commonTextStyle };
  const radioStyle = { color: "#909090", "&.Mui-checked": { color: "#909090" } };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', padding: '0px 15px' }}>
      {/* Cart Total */}
      <Box sx={{ padding: "28px 42px", width: '100%', minWidth: '300px', backgroundColor: '#f0f0f0', maxWidth: '400px' }}>
        <Typography sx={{ fontSize: '20px', marginBottom: '40px', color: 'black', fontFamily: 'Rokkit, Georgia, serif' }}>Cart Total</Typography>
        <Table sx={{ borderCollapse: "collapse", "& .MuiTableCell-root": { borderBottom: "none", padding: "4px 10px" } }}>
          <TableBody>
            {cartItems.length > 0 && cartItems.map(item => (
              <TableRow key={item.id || item.name}>
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
              <TableCell align="right">
                <Typography variant="body1" sx={{ fontWeight: 'normal', color: '#909090', fontSize: '14px !important' }}>
                  {currencyFormatter.format(totalAmount - discount)}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: "28px 42px", minWidth: '300px', maxWidth: '400px', backgroundColor: '#f0f0f0' }}>
        <Typography sx={{ fontSize: '20px', marginBottom: '40px', color: 'black', fontFamily: 'Rokkit, Georgia, serif' }}>Payment Method</Typography>
        <FormControlLabel
          value="Direct Bank Transfer"
          control={<Radio sx={radioStyle} checked={paymentMethod === "Direct Bank Transfer"} onChange={handlePaymentChange} />}
          label={<Typography sx={commonTextStyle}>Direct Bank Transfer</Typography>}
          sx={{ padding: '0 15px', margin: '0 0 8px 0' }}
        />
        <FormControlLabel
          value="Check Payment"
          control={<Radio sx={radioStyle} checked={paymentMethod === "Check Payment"} onChange={handlePaymentChange} />}
          label={<Typography sx={commonTextStyle}>Cheque Payment</Typography>}
          sx={{ padding: '0 15px', margin: '0 0 8px 0' }}
        />
        <FormControlLabel
          value="Paypal"
          control={<Radio sx={radioStyle} checked={paymentMethod === "Paypal"} onChange={handlePaymentChange} />}
          label={<Typography sx={commonTextStyle}>Paypal</Typography>}
          sx={{ padding: '0 15px', margin: '0 0 8px 0' }}
        />

        <FormControlLabel
          control={<Checkbox sx={{ color: '#909090' }} />}
          label={<Typography sx={commonTextStyle}>I have read and accept the terms and conditions.</Typography>}
          sx={{ padding: '0 15px', margin: '0' }}
        />
      </Box>

      <Box>
        <NavLink to='/order-complete'>
          <ShopButton cosmetic={{ fontSize: '14px', padding: '8px 20px', textTransform: 'none' }}>
                        Place an order
          </ShopButton>
        </NavLink>
      </Box>
    </Box>
  );
}
