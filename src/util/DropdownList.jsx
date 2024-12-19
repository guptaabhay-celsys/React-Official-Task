import { Menu, MenuItem } from '@mui/material';
import { forwardRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const DropdownList = forwardRef(({ anchorEl, open, onClose }, ref) => {
  const [anchorElRect, setAnchorElRect] = useState(null);

  const options = [
    { label: 'Product Detail', path: 'product-details' },
    { label: 'Shopping Cart', path: 'shopping-cart' },
    { label: 'Checkout', path: 'checkout' },
    { label: 'Order Complete', path: 'order-complete' },
    { label: 'Wishlist', path: 'wishlist' },
  ];

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event) => {
      // eslint-disable-next-line react/prop-types
      if (anchorEl && !anchorEl.contains(event.target) && !event.target.closest('.MuiMenu-root')) {
        onClose();
      }
    };

    const handleScroll = () => {
      onClose();
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [open, anchorEl, onClose]);

  useEffect(() => {
    if (anchorEl) {
      // eslint-disable-next-line react/prop-types
      const rect = anchorEl.getBoundingClientRect();
      setAnchorElRect(rect);
    }
  }, [anchorEl]);

  return (
    <Menu
      ref={ref}
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      // eslint-disable-next-line no-undef
      onOptionSelect={() => handleButtonClick('men', '/men')}
      sx={{
        '& .MuiPaper-root': {
          backgroundColor: 'black',
          color: 'gray',
          maxWidth: '200px',
          width: 'auto', 
          overflow: 'hidden',
          position: 'absolute',
          left: anchorElRect ? `${anchorElRect.left}px` : 'auto',
          top: anchorElRect ? `${anchorElRect.bottom}px` : 'auto',
          right: 'auto',
        },
      }}
    >
      {options.map((option) => (
        <MenuItem
          key={option.label}
          onClick={() => {
            const navigateTo = option.path === 'shopping cart' ? '/cart' : `/${option.path}`;
            window.location.href = navigateTo;
      
            setTimeout(onClose, 200); 
          }}
          sx={{
            '&:hover': {
              color: 'white',
            },
          }}
        >
          <Link
            to={option.path === 'shopping cart' ? '/cart' : `/${option.path}`}
            style={{
              color: 'inherit',
              textDecoration: 'none',
              display: 'block',
            }}
          >
            {option.label}
          </Link>
        </MenuItem>
      
      
      ))}
    </Menu>
  );
});

DropdownList.displayName = 'DropdownList';

export default DropdownList;
