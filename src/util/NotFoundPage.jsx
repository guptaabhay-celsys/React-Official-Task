import { Box, Typography } from "@mui/material";

export default function NotFoundPage(){
    return (
    <Box style={{ textAlign: 'center', margin: '100px auto 200px auto', }}>
      <Typography variant="h2">404</Typography>
      <Typography variant="h3">Page Not Found</Typography>
    </Box>
  )
}