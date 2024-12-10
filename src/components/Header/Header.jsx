import { Box, TextField, Typography, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const HeaderWithSearchBar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px',
        backgroundColor: '#ffffff',
        width: '100%',
        zIndex: 1000, 
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        boxSizing: 'border-box',
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold', fontFamily: 'Roboto, sans-serif', color: 'gray', paddingTop: '25px',
            paddingLeft: '45px', }}
      >
        Footwear
      </Typography>

      {/* Rounded Search Bar */}
      <TextField
        variant="outlined"
        placeholder="Search..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon sx={{ color: 'gray' }} />
            </InputAdornment>
          ),
          sx: {
            borderRadius: '35px',
            paddingRight: '8px',
          },
        }}
        sx={{
          width: '300px',
          paddingRight: '45px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '35px',
            backgroundColor: '#fff',
            '& fieldset': {
              borderColor: 'lightgray',
            },
            '&:hover fieldset': {
              borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'black',
            },
          },
        }}
      />
    </Box>
  );
};

export default HeaderWithSearchBar;
