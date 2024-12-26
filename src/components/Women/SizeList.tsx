import { Box, Typography, Grid } from '@mui/material';
import sizeData from '../../data/size';

export default function SizeWidthBox() {
  return (
    <Box
      sx={{
        border: '1px solid lightgray',
        padding: '14px',
        borderRadius: '2px',
        width: '100%',
        marginBottom: '6px',
        textAlign: 'left',
        fontFamily: 'Montserrat, Arial, sans-serif',
      }}
    >
      {sizeData.map(
        (data) =>
          Array.isArray(data.subcategories) && (
            <Box key={data.category} sx={{ marginBottom: '24px' }}>
              <Typography
                variant="body1"
                sx={{
                  marginBottom: '16px',
                  fontSize: '16px',
                  textTransform: 'uppercase',
                }}
              >
                {data.category}
              </Typography>

              {data.subcategories?.map((subcategory) => (
                <Box key={subcategory.subcategory} sx={{ marginBottom: '24px' }}>
                  <Typography
                    variant="body1"
                    sx={{
                      marginBottom: '8px',
                      fontSize: '14px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {subcategory.subcategory}
                  </Typography>

                  <Grid container spacing={0.5}>
                    {subcategory.items.map((item, index) => (
                      <Grid item xs={3} key={index}>
                        <Box
                          sx={{
                            color: '#fff',
                            padding: '8px',
                            backgroundColor: 'lightgray',
                            borderRadius: '1px',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '14px',
                            transition: 'background-color 0.5s ease',
                            '&:hover': {
                              backgroundColor: 'gray',
                            },
                          }}
                        >
                          {item}
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              ))}
            </Box>
          )
      )}
    </Box>
  );
}
