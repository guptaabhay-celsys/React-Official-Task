import { Box, Button, Card, CardContent, Avatar, Typography, Stack } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Profile = () => {
  const navigate = useNavigate();
  const { userInfo } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f9fafc',
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: '500px',
          boxShadow: 3,
          borderRadius: '16px',
          padding: 4,
          backgroundColor: '#ffffff',
        }}
      >
        <Stack spacing={2} alignItems="center">
          <Avatar
            sx={{
              bgcolor: '#88c8bc',
              width: 80,
              height: 80,
              fontSize: '2rem',
            }}
          >
            {userInfo?.name?.[0]?.toUpperCase()}
          </Avatar>

          <Typography variant="h5" fontWeight="bold">
            {userInfo?.name || 'Guest User'}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ fontSize: '0.95rem', letterSpacing: '0.5px' }}
          >
            {userInfo?.email || 'No email provided'}
          </Typography>

          <Stack direction="column" spacing={2} sx={{ width: '100%' }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#88c8bc',
                color: 'white',
                fontWeight: 'bold',
                py: 1.5,
                ':hover': { backgroundColor: '#80c8bc' },
              }}
              onClick={() => navigate('/orders')}
            >
              View Your Orders
            </Button>

            <Button
              variant="outlined"
              fullWidth
              color="error"
              sx={{
                borderColor: '#ff5c5c',
                color: '#ff5c5c',
                fontWeight: 'bold',
                py: 1.5,
                ':hover': {
                  backgroundColor: '#ffe5e5',
                  borderColor: '#ff5c5c',
                },
              }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
};

export default Profile;
