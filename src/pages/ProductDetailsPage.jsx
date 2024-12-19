import { Box } from "@mui/material";
import ProductDetail from "../components/ProductDetails/ProdInfoSection";
import Breadcrumb from "../util/NavigatedPath";
import ProdDescription from "../components/ProductDetails/ProdDescription";

export default function ProductDetailsPage(){
  return (
    <>
      <Breadcrumb />
      <Box sx={{width: 'calc(100% - 150px)', margin: '98px auto'}}>
        <ProductDetail />
        <ProdDescription />
      </Box>
    </>
  )
}