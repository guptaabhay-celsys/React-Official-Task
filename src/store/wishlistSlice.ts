import { createSlice } from "@reduxjs/toolkit";
import { addItemToWishlistThunk, deleteItemFromWishlistThunk } from "../../backend/util/handleWishlist";

type ItemType = {
  product_id: string | number;
  id: string | number;
  price: number;
  image: string;
  name: string;
};

type InitialWishlistType = {
  items: ItemType[];
  totalQuantity: number;
};

export type RootWishlistState = {
  wishlist: InitialWishlistType;
};

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
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.items.push(newItem);
      }
    },
    deleteItemFromWishlist(state, action) {
      const id = action.payload;
      state.totalQuantity--;
      state.items = state.items.filter(item => item.id !== id);
    },
    setWishlist(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addItemToWishlistThunk.fulfilled, (state, action) => {
      })
      .addCase(deleteItemFromWishlistThunk.fulfilled, (state, action) => {
      });
  },
});

export const { addItemToWishlist, deleteItemFromWishlist, setWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
