import { Box, TextField, Typography } from '@mui/material';

// eslint-disable-next-line react/prop-types
const CustomTextField = ({ label, placeholder, multiline = false, rows = 1 }) => {
  return (
    <Box sx={{ marginBottom: '24px' }}>
      <Typography
        variant="body1"
        sx={{ marginBottom: '8px', color: '#595959' }}
      >
        {label}
      </Typography>
      <TextField
        fullWidth
        placeholder={placeholder}
        variant="standard"
        multiline={multiline}
        minRows={rows}
        maxRows={multiline ? 8 : undefined}
        InputProps={{
          disableUnderline: true,
        }}
        sx={{
          backgroundColor: 'white',
          padding: '6px 12px',
          borderRadius: '2px',
          boxShadow: 'none', 
          transition: 'box-shadow 0.2s ease-in-out',
          '&:hover:not(.Mui-disabled)': {
            boxShadow: '0 0 0 1px gray',
          },
          '&:focus-within': {
            boxShadow: '0 0 0 1px gray',
          },
        }}
      />
    </Box>
  );
};

export default CustomTextField;
