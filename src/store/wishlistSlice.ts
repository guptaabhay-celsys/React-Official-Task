import { createSlice } from "@reduxjs/toolkit";
import { InitialWishlistType, wishlistItemType } from "../types";

const initialWishlistState: InitialWishlistType = {
  items: [],
  totalQuantity: 0,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialWishlistState,
  reducers: {
    addItemToWishlist(state, action) {
      const newItem = action.payload;
      state.totalQuantity++;
      state.items = [...state.items, newItem];
    },
    deleteItemFromWishlist(state, action) {
      const id = action.payload;
      state.totalQuantity--;
      state.items = state.items.filter(item => item.product_id !== id);
    },
    setWishlist(state, action) {
      const { items, totalQuantity } = action.payload;
      state.items = items.map((item: wishlistItemType) => ({
        ...item,
      }));
      state.totalQuantity = totalQuantity;
      console.log(JSON.parse(JSON.stringify(state)))
    },
  },
});

export const { addItemToWishlist, deleteItemFromWishlist, setWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
