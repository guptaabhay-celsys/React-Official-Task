import { Box} from "@mui/material"

export default function ProdSize({sizes}: { sizes?: number[] }){

  return (
    <Box sx={{marginBottom: '8px', display: 'flex', gap: '10px'}}>
      {sizes && sizes.map(
        (data) =>
          <Box>
            <Box>
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
                {data}
            </Box>
          </Box>
    </Box>
          )
      }
    </Box>
  )
}