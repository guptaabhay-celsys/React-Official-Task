import { Box } from "@mui/material"
import HeaderWithSearchBar from "./components/header/Header"
import ResponsiveAppBar from "./components/appbar/Appbar"

function App() {

  return (
    <>
      <Box sx={{ backgroundColor: '#ffffff', height: '100vh', width: '100%'}}>
        <HeaderWithSearchBar /> 
        <ResponsiveAppBar />
      </Box>
      
    </>
  )
}

export default App
