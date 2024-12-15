import { Box, Typography } from "@mui/material"
import sizeData from "../data/size"

export default function ProdSize(){
    return (
        <Box sx={{marginBottom: '8px'}}>
        {sizeData.map(
        (data) =>
          Array.isArray(data.subcategories) && (
            <Box key={data.category} sx={{ marginBottom: '24px' }}>

              {data.subcategories?.map((subcategory) => (
                <Box key={subcategory.subcategory} sx={{ marginBottom: '10px' }}>
                  <Typography
                    variant="body1"
                    sx={{
                      marginBottom: '8px',
                      fontSize: '14px',
                      textTransform: 'uppercase',
                      color: '#616161'
                    }}
                  >
                    {subcategory.subcategory}
                  </Typography>

                  <Box container sx={{display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
                    {subcategory.items.map((item, index) => (
                      <Box key={index}>
                        <Box
                          sx={{
                            color: '#fff',
                            padding: '8px',
                            backgroundColor: 'lightgray',
                            borderRadius: '2px',
                            width: '40px !important',
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
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          )
      )}
        </Box>
    )
}