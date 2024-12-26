import { Button, SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent";

type ShopButtonType = {
  children: React.ReactNode,
  cosmetic: React.CSSProperties
}

// eslint-disable-next-line react/prop-types
export default function ShopButton({ children, cosmetic }: ShopButtonType){
  return (
    <Button variant="contained" sx={{ color: '#fff', border: 'none', cursor: 'pointer', background: '#616161', transition: 'all 0.5s ease', ':hover': {background: 'black'}, borderRadius: '50px', ...cosmetic}} >
      {children}
    </Button>
  )
}