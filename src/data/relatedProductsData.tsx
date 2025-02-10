import { useSelector } from "react-redux";
import { InitialProductType, RootProductState } from ".././types";

const RelatedProductsData = () => {
  const products: InitialProductType[] = useSelector((state: RootProductState) => state.products.products);
  return products.slice(0, 4);
};

export default RelatedProductsData;
