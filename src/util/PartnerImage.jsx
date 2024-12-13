import { Box } from '@mui/material';

// eslint-disable-next-line react/prop-types
const ImageBox = ({ image }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        border: "none",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        height: '120px',
        width: '162px',
        borderRadius: '10px',
      }}
    />
  );
};

export default ImageBox;