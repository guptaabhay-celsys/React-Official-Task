import MensPromotionBanner from "../components/Mens/Banner";
import ShoesTypeCards from "../components/Mens/ShoesTypeCards";
import MultiActionAreaCard from '../util/ProductCards';
import PaginationOutlined from "../components/Mens/Pagination";

export default function MensPage() {
  return (
    <>
      <MensPromotionBanner />
      <ShoesTypeCards />
      <MultiActionAreaCard text= 'View All Products' cosmetic={{fontSize: '20px', textTransform: 'uppercase', color: 'rgba(0, 0, 0, 0.3)'}} navigationType={<PaginationOutlined />}/>
    </>
  );
}