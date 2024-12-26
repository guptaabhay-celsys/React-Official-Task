import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumb() {
  const location = useLocation();

  const pathSegments = location.pathname
    .replace(/\/$/, '') 
    .split('/') 
    .filter(Boolean);

  const breadcrumbLinks = [
    { label: 'Home', to: '/' },
    ...pathSegments.map((segment, index) => {
      const formattedSegment = segment.charAt(0).toUpperCase() + segment.slice(1);
      return {
        label: formattedSegment,
        to: segment === 'shopping-cart' 
          ? '/cart'
          : '/' + pathSegments.slice(0, index + 1).join('/'),
      };
    }),
  ];

  return (
    <Box sx={{ padding: '14px 75px' }}>
      <Typography
        variant="h6"
        sx={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '12px' }}
      >
        {breadcrumbLinks.map((link, index) => {
          const isLastItem = index === breadcrumbLinks.length - 1;
          return (
            <React.Fragment key={index}>
              <Link
                to={link.to}
                style={{
                  textDecoration: 'none',
                  color: index === 0 ? '#88c8bc' : '#616161',
                  textTransform: 'uppercase',
                }}
              >
                {link.label}
              </Link>
              {!isLastItem && ' / '}
            </React.Fragment>
          );
        })}
      </Typography>
    </Box>
  );
}
