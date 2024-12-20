import { Box, Typography, Table, TableBody, TableCell, TableRow, Divider, Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import ShopButton from "../../util/Button";
import { currencyFormatter } from "../../util/formatting";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function CouponSection() {

  const totalAmount = useSelector(state => state.cart.totalAmount);

  const tableCellStyle = {
    textAlign: "center",
    fontWeight: '300',
    color: '#909090',
  };
  
  const boldTextStyle = {
    fontWeight: 'bold',
    color: '#909090',
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
        <Box>
          <TextField 
            placeholder="Your Coupon Number" 
            sx={{
              width: '50%',
              fontSize: '14px',
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: '#f0f0f0', 
                },
                "&:hover fieldset": {
                  borderColor: '#c0c0c0',
                },
                "&.Mui-focused fieldset": {
                  borderColor: 'gray',
                },
              },
            }} 
          />
        </Box>
        <ShopButton cosmetic={{ fontSize: '14px', padding: '8px 20px', alignSelf: 'flex-start' }}>
          Apply Coupon
        </ShopButton>
      </Box>

      <Box sx={{ padding: "16px", minWidth: '300px', maxHeight: '250px', backgroundColor: '#f0f0f0' }}>
        <Table
          sx={{
            borderCollapse: "collapse",
            "& .MuiTableCell-root": {
              borderBottom: "none", 
              padding: "8px 0",
            },
          }}
        >
          <TableBody>
            <TableRow>
              <TableCell sx={tableCellStyle}>
                <Typography variant="body1">Subtotal</Typography>
              </TableCell>
              <TableCell align="right" sx={{ textAlign: "center" }}>
                <Typography variant="body1" sx={boldTextStyle}>
                  {currencyFormatter.format(totalAmount)}
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={tableCellStyle}>
                <Typography variant="body1">Delivery</Typography>
              </TableCell>
              <TableCell align="right" sx={{ textAlign: "center" }}>
                <Typography variant="body1" sx={boldTextStyle}>
                  {currencyFormatter.format(0)}
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={tableCellStyle}>
                <Typography variant="body1">Shipping</Typography>
              </TableCell>
              <TableCell align="right" sx={{ textAlign: "center" }}>
                <Typography variant="body1" sx={boldTextStyle}>
                  {currencyFormatter.format(0)}
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={2}>
                <Divider sx={{ margin: "10px 0" }} />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography variant="body1" sx={{ fontWeight: '300', color: '#606060' }}>
                  Cart Total
                </Typography>
              </TableCell>
              <TableCell align="right" sx={{ textAlign: "center" }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#808080' }}>
                  {currencyFormatter.format(totalAmount)}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <NavLink to = '/checkout'>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#616161",
              borderRadius: "4px",
              color: "white",
              textTransform: "none",
              margin: "50px auto 0 50px",
            }}
          >
                Proceed to Checkout
          </Button>
        </NavLink>
      </Box>
    </Box>
  );
}
