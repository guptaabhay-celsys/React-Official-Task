import { Box, Table, TableBody, TableRow, TableCell, Typography, Divider, FormControlLabel, Checkbox, Radio } from "@mui/material";
import { useState } from "react"; // Import useState hook
import { currencyFormatter } from "../../util/formatting";
import ShopButton from "../../util/Button";

export default function PaymentSection() {
    const [paymentMethod, setPaymentMethod] = useState("");

    const handlePaymentChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    return (
        <Box sx={{ display: 'flex', flex: '1', flexDirection: 'column', gap: '20px', alignItems: 'center', padding: '0px 15px' }}>
            <Box sx={{ padding: "28px 42px", width: '100%', minWidth: '300px', backgroundColor: '#f0f0f0', maxWidth: '400px' }}>
                <Typography sx={{ fontSize: '20px', marginBottom: '40px', color: 'black', fontFamily: 'Rokkit, Georgia, serif' }}>Cart Total</Typography>
                <Table
                    sx={{
                        borderCollapse: "collapse",
                        "& .MuiTableCell-root": {
                            borderBottom: "none",
                            padding: "4px 10px",
                        },
                    }}
                >
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ fontWeight: '300', color: '#909090', fontSize: '14px' }}>
                                <Typography variant="body1" sx={{ fontSize: '14px' }}>Subtotal</Typography>
                            </TableCell>
                            <TableCell align="right" sx={{ textAlign: "center", fontSize: '14px' }}>
                                <Typography variant="body1" sx={{ fontWeight: 'normal', color: '#909090', fontSize: '14px' }}>
                                    {currencyFormatter.format(200)}
                                </Typography>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell colSpan={2}>
                                <Divider sx={{ margin: "0 0 5px 0" }} />
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell sx={{ fontWeight: '300', color: '#909090', fontSize: '14px' }}>
                                <Typography variant="body1" sx={{ fontSize: '14px' }}>1 x Product Name</Typography>
                            </TableCell>
                            <TableCell align="right" sx={{ textAlign: "center", fontSize: '14px' }}>
                                <Typography variant="body1" sx={{ fontWeight: 'normal', color: '#909090', fontSize: '14px' }}>
                                    {currencyFormatter.format(0)}
                                </Typography>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell colSpan={2}>
                                <Divider sx={{ margin: "0 0 5px 0" }} />
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell sx={{ fontWeight: '300', color: '#909090', fontSize: '14px' }}>
                                <Typography variant="body1" sx={{ fontSize: '14px' }}>1 x Product Name</Typography>
                            </TableCell>
                            <TableCell align="right" sx={{ textAlign: "center", fontSize: '14px' }}>
                                <Typography variant="body1" sx={{ fontWeight: 'normal', color: '#909090', fontSize: '14px' }}>
                                    {currencyFormatter.format(0)}
                                </Typography>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell colSpan={2}>
                                <Divider sx={{ margin: "0 0 5px 0" }} />
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell sx={{ fontWeight: '300', color: '#909090', fontSize: '14px' }}>
                                <Typography variant="body1" sx={{ fontSize: '14px' }}>Shipping</Typography>
                            </TableCell>
                            <TableCell align="right" sx={{ textAlign: "center", fontSize: '14px' }}>
                                <Typography variant="body1" sx={{ fontWeight: 'normal', color: '#909090', fontSize: '14px' }}>
                                    {currencyFormatter.format(45)}
                                </Typography>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell colSpan={2}>
                                <Divider sx={{ margin: "0 0 5px 0" }} />
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                <Typography variant="body1" sx={{ fontWeight: 'normal', color: '#909090', fontSize: '14px' }}>
                                    Order Total
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="body1" sx={{ fontWeight: 'normal', color: '#909090', fontSize: '14px' }}>
                                    {currencyFormatter.format(155)}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', color: '#909090', fontWeight: 'normal', gap: '8px', padding: "28px 42px", minWidth: '300px', maxWidth: '400px', maxHeight: 'auto', backgroundColor: '#f0f0f0', fontSize: '14px' }}>
                <Typography sx={{ fontSize: '20px', marginBottom: '40px', color: 'black', fontFamily: 'Rokkit, Georgia, serif' }}>Payment Method</Typography>
                <FormControlLabel
                    value="Direct Bank Transfer"
                    control={
                        <Radio
                            sx={{
                                color: "#909090",
                                "&.Mui-checked": {
                                    color: "#909090",
                                },
                            }}
                            checked={paymentMethod === "Direct Bank Transfer"} // Check if selected
                            onChange={handlePaymentChange} // Update the selected value
                        />
                    }
                    label={<Typography sx={{ fontSize: '14px' }}>Direct Bank Transfer</Typography>}
                    sx={{ padding: '0 15px', margin: '0 0 8px 0', fontSize: '14px' }}
                />
                <FormControlLabel
                    value="Check Payment"
                    control={
                        <Radio
                            sx={{
                                color: "#909090",
                                "&.Mui-checked": {
                                    color: "#909090",
                                },
                            }}
                            checked={paymentMethod === "Check Payment"}
                            onChange={handlePaymentChange}
                        />
                    }
                    label={<Typography sx={{ fontSize: '14px' }}>Cheque Payment</Typography>}
                    sx={{ padding: '0 15px', margin: '0 0 8px 0', fontSize: '14px' }}
                />
                <FormControlLabel
                    value="Paypal"
                    control={
                        <Radio
                            sx={{
                                color: "#909090",
                                "&.Mui-checked": {
                                    color: "#909090",
                                },
                            }}
                            checked={paymentMethod === "Paypal"}
                            onChange={handlePaymentChange}
                        />
                    }
                    label={<Typography sx={{ fontSize: '14px' }}>Paypal</Typography>}
                    sx={{ padding: '0 15px', margin: '0 0 8px 0', fontSize: '14px' }}
                />

                <FormControlLabel
                    control={<Checkbox sx={{ color: '#909090' }} />}
                    label={<Typography sx={{ fontSize: '14px' }}>I have read and accept the terms and conditions.</Typography>}
                    sx={{ padding: '0 15px', margin: '0' }}
                />
            </Box>

            <Box>
                <ShopButton cosmetic={{ fontSize: '14px', padding: '8px 20px', textTransform: 'none' }}>Place an order</ShopButton>
            </Box>
        </Box>
    );
}
