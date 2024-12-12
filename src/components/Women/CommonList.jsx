// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Box, Typography, List, ListItem} from '@mui/material';
import sizeData from '../../data/size';
import SizeWidthBox from './SizeList';

export default function CombinedComponent() {
  const firstCommonListItem = sizeData[0];
  const remainingCommonListItems = sizeData.slice(1);

  return (
    <Box sx={{ width: '100%', textAlign: 'left', letterSpacing: '1px', lineHeight: '1.6', }}>
      {Array.isArray(firstCommonListItem.items) && (
        <Box
          key={firstCommonListItem.category}
          sx={{
            border: '1px solid lightgray',
            marginBottom: '4px',
            padding: '14px',
            borderRadius: '2px',
            fontFamily: 'Montserrat, Arial, sans-serif',
          }}
        >
          <Typography variant="body1" sx={{ marginBottom: '8px', fontSize: '16px', textTransform: 'uppercase', }}>
            {firstCommonListItem.category}
          </Typography>
          <List>
            {firstCommonListItem.items.map((item, index) => (
              <ListItem key={index} sx={{ padding: '4px 0', color: 'gray', fontSize: '14px', }}>
                {item}
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      <SizeWidthBox />

      {remainingCommonListItems.map(
        (data) =>
          Array.isArray(data.items) && (
            <Box
              key={data.category}
              sx={{
                border: '1px solid lightgray',
                padding: '14px',
                borderRadius: '2px',
                marginBottom: '6px',
                fontFamily: 'Montserrat, Arial, sans-serif',
              }}
            >
              <Typography variant="h6" sx={{ fontSize: '16px', marginBottom: '8px', textTransform: 'uppercase', }}>
                {data.category}
              </Typography>
              <List>
                {data.items.map((item, index) => (
                  <ListItem key={index} sx={{ padding: '4px 0', color: 'gray', fontSize: '14px',  }}>
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>
          )
      )}
    </Box>
  );
}
