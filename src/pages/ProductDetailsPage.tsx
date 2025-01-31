import { Box } from "@mui/material";
import ProductDetail from "../components/ProductDetails/ProdInfoSection";
import Breadcrumb from "../util/NavigatedPath";
import ProdDescription from "../components/ProductDetails/ProdDescription";
import { useSelector } from "react-redux";
import { RootState } from "../store/productsSlice";
import { useParams } from "react-router-dom";
import { InitialProductType } from "../store/productsSlice";

export default function ProductDetailsPage() {
  const products: InitialProductType[] = useSelector((state: RootState) => state.products.products);
  const { Prodid } = useParams<{ Prodid: string }>();

  const product = products.find((item) => item.id.toString() === Prodid);

  if (!product) {
    return <Box sx={{ textAlign: "center", marginTop: "50px" }}>Product not found</Box>;
  }

  return (
    <>
      <Breadcrumb />
      <Box sx={{ width: "calc(100% - 150px)", margin: "98px auto" }}>
        <ProductDetail product={product} />
        <ProdDescription />
      </Box>
    </>
  );
}

