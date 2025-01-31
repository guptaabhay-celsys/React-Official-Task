import React, { useState } from 'react';
import { Box, Typography, List, ListItem, Grid, Checkbox, FormControlLabel } from '@mui/material';
import { filters } from '../Men/MenProductSection';

export default function CombinedComponent() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSelect = (item: string) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(item)) {
        return prevSelectedItems.filter((selectedItem) => selectedItem !== item);
      } else {
        return [...prevSelectedItems, item];
      }
    });
  };

  return (
    <Box sx={{ width: '100%', textAlign: 'left', letterSpacing: '1px', lineHeight: '1.6' }}>
      {filters.map((filter, index) => (
        <Box
          key={filter.id}
          sx={{
            border: '1px solid lightgray',
            marginBottom: '6px',
            padding: '14px',
            borderRadius: '2px',
            fontFamily: 'Montserrat, Arial, sans-serif',
          }}
        >
          <Typography variant="h6" sx={{ fontSize: '16px', marginBottom: '8px', textTransform: 'uppercase' }}>
            {filter.id}
          </Typography>

          {filter.subcategories ? (
            filter.subcategories.map((subcategory) => (
              <Box key={index} sx={{ margin: '40px 0 24px 0' }}>

                <Grid container spacing={0.5}>
                  {subcategory.items.map((item, index) => (
                    <Grid item xs={3} key={index}>
                      <Box
                        onClick={() => handleSelect(item)}
                        sx={{
                          color: selectedItems.includes(item) ? '#fff' : '#909090',
                          backgroundColor: selectedItems.includes(item) ? '#909090' : '#f0f0f0',
                          padding: '8px',
                          borderRadius: '1px',
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '14px',
                          cursor: 'pointer',
                          transition: 'background-color 0.5s ease, color 0.5s ease',
                          '&:hover': {
                            backgroundColor: selectedItems.includes(item) ? item : 'gray',
                            color: 'white',
                          },
                        }}
                      >
                        {item}
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))
          ) : (
            <List>
              {filter.items?.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    padding: '4px 0',
                    color: '#909090',
                    backgroundColor: 'transparent',
                    fontSize: '14px',
                    cursor: 'pointer',
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox checked={selectedItems.includes(item)} sx={{color: '#909090 !important'}}/>}
                    label={item}
                    onChange={() => handleSelect(item)}
                    sx={{ marginRight: '10px' }}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      ))}
    </Box>
  );
}
