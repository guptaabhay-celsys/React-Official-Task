import { createSlice } from "@reduxjs/toolkit";

export type ItemType = {
  quantity: number;
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
      state.items = [...state.items, newItem];
    },
    deleteItemFromWishlist(state, action) {
      const id = action.payload;
      state.totalQuantity--;
      state.items = state.items.filter(item => item.id !== id);
    },
    setWishlist(state, action) {
      const { items, totalQuantity } = action.payload;
      state.items = items.map((item: ItemType) => ({
        ...item,
      }));
      state.totalQuantity = totalQuantity;
    },
    
  },
});

export const { addItemToWishlist, deleteItemFromWishlist, setWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
