import { Button } from "@mui/material"

// eslint-disable-next-line react/prop-types
export default function ShopButton({ children, cosmetic }){
  return (
    <Button variant="contained" sx={{ color: '#fff', border: 'none', cursor: 'pointer', background: '#616161', transition: 'all 0.5s ease', ':hover': {background: 'black'}, borderRadius: '50px', ...cosmetic}} >
      {children}
    </Button>
  )
}