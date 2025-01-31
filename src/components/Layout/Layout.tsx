import { Outlet } from 'react-router-dom';
import HeaderWithSearchBar from './Header';
import Footer from './Footer';
import ResponsiveAppBar from './Appbar';
import Discount from './Discount';
import ShiftUpButton from '../../util/ShiftUpButton';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setWishlist } from '../../store/wishlistSlice';
import { setCart } from '../../store/cartSlice';

type CartItem = {
  product_id: string | number;
  id: string;
  price: number | string;
  image: string;
  quantity: number;
  totalPrice: number;
  name: string;
};

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
          dispatch(
            setWishlist({
              items: data.data,
              totalQuantity: data.data.length,
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
