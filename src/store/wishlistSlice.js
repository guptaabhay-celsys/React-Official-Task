import { createSlice } from "@reduxjs/toolkit";

const initialWishlistState = {
  items: [],
  totalQuantity : 0,
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: initialWishlistState,
  reducers: {
    addItemToWishlist(state, action) {
      const newItem = action.payload;
      state.totalQuantity++
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          image: newItem.image,
          name: newItem.name,
        });

      }
    },
    deleteItemFromWishlist(state, action) {
      const id = action.payload;
      state.totalQuantity--
      const itemToRemove = state.items.find(item => item.id === id);

      if (itemToRemove) {
        state.items = state.items.filter(item => item.id !== id);
      }
    },
  },
});

export const wishlistActions = wishlistSlice.actions;
export default wishlistSlice.reducer;