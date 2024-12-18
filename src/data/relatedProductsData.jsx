import { useSelector } from "react-redux";

const RelatedProductsData = () => {
  const products = useSelector((state) => state.products.products);
  return products.slice(0, 4);
};

export default RelatedProductsData;
