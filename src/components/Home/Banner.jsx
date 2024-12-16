import { Box, Typography, IconButton } from '@mui/material';
import ShopButton from '../../util/Button.jsx';
import { useEffect, useState } from 'react';
import image1 from '../../assets/Other Images/image1.jpg';
import image2 from '../../assets/Other Images/image2.jpg';
import image from '../../assets/images/img_bg_3.jpg';

const textSets = [
  {
    title1: "Men's",
    title2: "Shoes",
    subtitle: "Collection",
    description: "New Trending Shoes",
    backgroundImage: image,
  },
  {
    title1: "Huge",
    title2: "Sale",
    subtitle: "50% Off",
    description: "Big sale sandals",
    backgroundImage: image2,
  },
  {
    title1: "New",
    title2: "Arrival",
    subtitle: "Up to 30% Off",
    description: "New stylish shoes for men",
    backgroundImage: image1,
  },
];

const BannerWithImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textSets.length);
        setAnimate(true); 
      }, 500); 
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleStepClick = (index) => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setAnimate(true);
    }, 500); 
  };

  const { title1, title2, subtitle, description, backgroundImage } = textSets[currentIndex];

  return (
    <Box
      sx={{
        width: '100%',
        height: '600px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: animate ? 1 : 0.5,
          transition: 'opacity 1s ease-out',
        }}
      ></Box>

      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: animate ? 1 : 0,
          transition: 'opacity 1s ease-out, transform 1s ease-out',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: '60px',
            fontWeight: '700',
            fontFamily: 'Rokkitt, Georgia, serif',
            animation: animate ? 'slideInUp 1s ease-out' : 'none',
          }}
        >
          {title1}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: '30px',
            letterSpacing: '2px',
            fontWeight: '500',
            fontFamily: 'Rokkitt, Georgia, serif',
            animation: animate ? 'slideInUp 1s ease-out' : 'none',
          }}
        >
          {title2}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '50px',
            letterSpacing: '1px',
            fontWeight: '100',
            fontFamily: 'Rokkitt, Georgia, serif',
            animation: animate ? 'slideInUp 1s ease-out' : 'none',
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '20px',
            letterSpacing: '1px',
            marginBottom: '30px',
            fontFamily: 'Montserrat, Arial, sans-serif',
            color: '#FFFFFFCC',
            animation: animate ? 'slideInUp 1s ease-out' : 'none',
          }}
        >
          {description}
        </Typography>
        
        <ShopButton
          cosmetic={{
            padding: '20px 30px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            animation: animate ? 'slideInUp 1s ease-out' : 'none',
          }}
        >
          Shop Collection
        </ShopButton>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '10px',
        }}
      >
        {textSets.map((_, index) => (
          <IconButton
            key={index}
            onClick={() => handleStepClick(index)}
            sx={{
              height: '10px',
              width: '10px',
              borderRadius: '50%',
              padding: '4px',
              backgroundColor: currentIndex === index ? '#88c8bc' : 'rgba(255, 255, 255, 0.2)',
              transition: 'background-color 0.3s ease',
            }}
          />
        ))}
      </Box>
      <style>
        {`
          @keyframes slideInUp {
            0% {
              transform: translateY(50px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default BannerWithImage;
