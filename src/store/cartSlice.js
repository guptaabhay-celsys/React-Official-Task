import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });

        state.totalAmount += newItem.price;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
        state.totalAmount += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        state.totalQuantity--;
        existingItem.quantity--;

        if (existingItem.quantity === 0) {
          state.totalAmount -= existingItem.totalPrice; 
          state.items = state.items.filter(item => item.id !== id);
        } else {
          state.totalAmount -= existingItem.price;
          existingItem.totalPrice -= existingItem.price;
        }
      }
    },
    deleteItemFromCart(state, action) {
      const id = action.payload;
      const itemToRemove = state.items.find(item => item.id === id);

      if (itemToRemove) {
        state.totalQuantity -= itemToRemove.quantity;
        state.totalAmount -= itemToRemove.totalPrice;
        state.items = state.items.filter(item => item.id !== id);
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
