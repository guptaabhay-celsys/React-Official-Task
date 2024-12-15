import { Box, Typography, Grid, Select, FormControl, InputLabel } from "@mui/material";
import CustomTextField from "../../util/CustomTextField";
import RadioButton from "../../util/RadioButton";
import { useState } from "react";

export default function RegisterForm() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
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

      <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
        <InputLabel
          id="country-select-label"
          sx={{
            color: '#909090',
            fontSize: '13px',
            top: '-6px',
          }}
        >
          Select Country
        </InputLabel>
        <Select
          placeholder="Select Country"
          sx={{
            backgroundColor: 'white',
            borderRadius: '4px',
            fontSize: '13px',
            padding: '8px 12px',
            boxShadow: 'none',
            height: '40px',
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
        ></Select>
      </FormControl>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CustomTextField label="FIRST NAME" placeholder="Your firstname" style={{ fontSize: '13px' }} />
        </Grid>
        <Grid item xs={6}>
          <CustomTextField label="LAST NAME" placeholder="Your lastname" style={{ fontSize: '13px' }} />
        </Grid>
      </Grid>

      <CustomTextField label="COMPANY NAME" placeholder="Company Name" style={{ fontSize: '13px' }} />
      <CustomTextField label="ADDRESS" placeholder="Enter Your Address" style={{ fontSize: '13px' }} />
      <CustomTextField placeholder="Second Address" style={{ fontSize: '13px' }} />
      <CustomTextField label="TOWN/CITY" placeholder="Town or City" style={{ fontSize: '13px' }} />

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CustomTextField label="STATE/PROVINCE" placeholder="State Province" style={{ fontSize: '13px' }} />
        </Grid>
        <Grid item xs={6}>
          <CustomTextField label="ZIP/POSTAL CODE" placeholder="Zip/Postal" style={{ fontSize: '13px' }} />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CustomTextField label="EMAIL ADDRESS" placeholder="Your Email Address" style={{ fontSize: '13px' }} />
        </Grid>
        <Grid item xs={6}>
          <CustomTextField label="PHONE NUMBER" placeholder="Your Phone Number" style={{ fontSize: '13px' }} />
        </Grid>
      </Grid>

      <RadioButton
        label="CREATE AN ACCOUNT?"
        name="account"
        value="createAccount"
        checkedValue={selectedValue}
        onChange={handleRadioChange}
        style={{ color: '#595959' }}
      />
      <RadioButton
        label="SHIP TO DIFFERENT ADDRESS"
        name="account"
        value="shipDifferentAddress"
        checkedValue={selectedValue} 
        onChange={handleRadioChange}
        style={{ color: '#595959' }}
      />
    </Box>
  );
}