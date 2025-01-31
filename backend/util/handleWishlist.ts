import { createAsyncThunk } from "@reduxjs/toolkit";
import { addItemToWishlist, deleteItemFromWishlist } from "../../src/store/wishlistSlice";

type ItemType = {
    id: string | number;
    price: number;
    image: string;
    name: string;
  };

// export const fetchItemFromWishlist = async (userId: number) => {
//     try {
//       const response = await fetch(`http://localhost:3000/wishlist/products?userId=${userId}`);
//       const data = await response.json();
  
//       return data;
//     } catch (error) {
//       console.error('Error fetching wishlist items:', error);
//       return { success: false, data: [] };
//     }
//   };
  

// export const checkWishlistStatus = async (userId: number, productId: string | number) => {
//     try {
//       const response = await fetch(
//         `http://localhost:3000/wishlist/check-wishlist-status?userId=${userId}&productId=${productId}`
//       );
//       const data = await response.json();
//       if (data.success) return data.isWishlisted;
//     } catch (error) {
//       console.error("Error checking wishlist status:", error);
//     }
//     return false;
// };
  

export const addItemToWishlistThunk = createAsyncThunk(
    "wishlist/addItemToWishlist",
    async (product: ItemType, { dispatch, rejectWithValue }) => {
      try {
        const response = await fetch("http://localhost:3000/wishlist/add-to-wishlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product),
        });
        const data = await response.json();
  
        if (data.success) {
          dispatch(addItemToWishlist(product));
          return product;
        } else {
          return rejectWithValue(data.message);
        }
      } catch (error) {
        console.error("Error adding to wishlist:", error);
        return rejectWithValue("Failed to add product to wishlist.");
      }
    }
  );  
  
  
export const deleteItemFromWishlistThunk = createAsyncThunk(
    "wishlist/deleteItemFromWishlist",
    async ({ productId, userId }: { productId: string | number; userId: number }, { dispatch, rejectWithValue }) => {
      try {
        const response = await fetch("http://localhost:3000/wishlist/remove-from-wishlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ productId, userId }),
        });
        const data = await response.json();
  
        if (data.success) {
          dispatch(deleteItemFromWishlist(productId));
          return productId;
        } else {
          return rejectWithValue(data.message);
        }
      } catch (error) {
        console.error("Error removing from wishlist:", error);
        return rejectWithValue("Failed to remove product from wishlist.");
      }
    }
  );
  
  
  