import { Menu, MenuItem } from '@mui/material';
import { forwardRef, useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const DropdownList = forwardRef(({ anchorEl, open, onClose }, ref) => {
  const [anchorElRect, setAnchorElRect] = useState(null);

  const options = [
    { label: 'Product Detail', path: '/men/product-detail' },
    { label: 'Shopping Cart', path: '/men/shopping-cart' },
    { label: 'Checkout', path: '/men/checkout' },
    { label: 'Order Complete', path: '/men/order-complete' },
    { label: 'Wishlist', path: '/men/wishlist' },
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
          onClick={onClose}
          sx={{
            '&:hover': {
              color: 'white',
            },
          }}
        >
          {option.label}
        </MenuItem>
      ))}
    </Menu>
  );
});

DropdownList.displayName = 'DropdownList';

export default DropdownList;
