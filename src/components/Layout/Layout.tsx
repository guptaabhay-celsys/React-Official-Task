import { Outlet } from 'react-router-dom';
import HeaderWithSearchBar from './Header';
import Footer from './Footer';
import ResponsiveAppBar from './Appbar';
import Discount from './Discount';
import ShiftUpButton from '../../util/ShiftUpButton';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setWishlist } from '../../store/wishlistSlice';
import { wishlistItemType } from '../../types';
import { setCart } from '../../store/cartSlice';
import { CartItem } from '../../types';

const Layout = () => {
  const { userInfo } = useContext(AuthContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo?.id) {
      const fetchWishlist = async () => {
        try {
          const response = await fetch(
            `http://localhost:3000/wishlist/products?userId=${userInfo.id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
              },
            }
          );
          if (!response.ok) throw new Error("Failed to fetch wishlist");
      
          const data = await response.json();
      
          const processedWishlistItems: wishlistItemType[] = data.data.map((item: wishlistItemType) => ({
            ...item,
            product_id: item.product?.id,
          }));
      
          dispatch(
            setWishlist({
              items: processedWishlistItems,
              totalQuantity: processedWishlistItems.length,
            })
          );
        } catch (error) {
          console.error("Error fetching wishlist:", error);
        }
      };      
  
      const fetchCart = async () => {
        try {
          const response = await fetch(
            `http://localhost:3000/cart/products?userId=${userInfo.id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
              },
            }
          );
          if (!response.ok) throw new Error("Failed to fetch cart data");
      
          const data = await response.json();
      
          const processedItems: CartItem[] = data.data.map((item: CartItem) => {
            const price = parseFloat(item.price as string) || 0;
            const quantity = item.quantity || 1;
      
            return {
              ...item,
              product_id: item.product?.id,
              price,
              quantity,
              totalPrice: price * quantity,
            };
          });
          
          dispatch(
            setCart({
              items: processedItems,
              totalQuantity: processedItems.reduce(
                (sum: number, item: CartItem) => sum + item.quantity,
                0
              ),
              totalAmount: processedItems.reduce(
                (sum: number, item: CartItem) => sum + item.totalPrice,
                0
              ),
            })
          );
        } catch (error) {
          console.error("Error fetching cart data:", error);
        }
      };
      
  
      fetchWishlist();
      fetchCart();
    }
  }, [userInfo?.id, dispatch]);

  return (
    <>
      <HeaderWithSearchBar />
      <ResponsiveAppBar />
      <Discount />
      <Outlet />
      <Footer />
      <ShiftUpButton />
    </>
  );
};

export default Layout;
