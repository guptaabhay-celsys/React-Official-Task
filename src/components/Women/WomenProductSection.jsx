import { Box } from "@mui/material";
import BrandBox from "./BrandBox";
import MultiActionAreaCard from "../../util/ProductCards";

export default function WomenProductSection() {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row", 
          gap: "30px",
          margin: '118px auto 98px auto'
        }}
      >
        <Box
          sx={{
            flex: "1 1 25%",
            maxWidth: "300px",
          }}
        >
          <BrandBox />
        </Box>
  
        <Box
          sx={{
            flex: "1 1 75%",
          }}
        >
          <MultiActionAreaCard />
        </Box>
      </Box>
    );
  }
  