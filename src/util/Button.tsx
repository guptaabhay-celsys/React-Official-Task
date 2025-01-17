import { Button} from "@mui/material"

type ShopButtonProps = {
  children: React.ReactNode;
  cosmetic?: React.CSSProperties;
  onClick?: () => void;
};

// eslint-disable-next-line react/prop-types
export default function ShopButton({ children, cosmetic }: ShopButtonProps){
  return (
    <Button variant="contained" sx={{ color: '#fff', border: 'none', cursor: 'pointer', background: '#616161', transition: 'all 0.5s ease', ':hover': {background: 'black'}, borderRadius: '50px', ...cosmetic}} >
      {children}
    </Button>
  )
}