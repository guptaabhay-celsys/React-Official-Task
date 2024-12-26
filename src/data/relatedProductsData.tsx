import { useSelector } from "react-redux";
import { InitialProductType, RootState } from "../store/productsSlice";

const RelatedProductsData = () => {
  const products: InitialProductType[] = useSelector((state: RootState) => state.products.products);
  return products.slice(0, 4);
};

export default RelatedProductsData;
