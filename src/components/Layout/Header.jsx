import { Box, TextField, Typography, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const HeaderWithSearchBar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        width: '100%',
        padding: '60px 80px 30px 80px',
        zIndex: '2',
        boxSizing: 'border-box',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          fontFamily: 'Roboto, sans-serif',
          color: '#565656',
          letterSpacing: '1px',
        }}
      >
        Footwear
      </Typography>

      <TextField
        variant="outlined"
        placeholder="Search..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon
                sx={{
                  color: 'white',
                  backgroundColor: '#88c8bc', 
                  borderRadius: '50%', 
                  padding: '9px',
                  position: 'absolute',
                  right: '0px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                  fontSize: '20px !important',
                  boxSizing: 'unset'
                }}
              />
            </InputAdornment>
          ),
          sx: {
            borderRadius: '35px',
            height: '38px', 
            paddingRight: '80px',
          },
        }}
        sx={{
          width: '250px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '35px',
            backgroundColor: '#fff',
            '& fieldset': {
              borderColor: 'lightgray',
            },
            '&:hover fieldset': {
              borderColor: 'lightgray',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'lightgray',
            },
          },
        }}
      />
    </Box>
  );
};

export default HeaderWithSearchBar;
