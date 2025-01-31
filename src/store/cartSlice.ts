import { createSlice } from "@reduxjs/toolkit";

type CartItem = {
  product_id: string | number;
  id: string;
  price: number;
  image: string; 
  quantity: number;
  totalPrice: number;
  name: string;
}

export type CartState = {
  items: CartItem[],
  totalQuantity: number,
  totalAmount: number
}

export interface RootState {
  cart: CartState;
}

const initialCartState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    setCart(state, action) {
      const { items, totalQuantity, totalAmount } = action.payload;
      state.items = items.map((item: { quantity: number; }) => ({
        ...item,
        quantity: item.quantity || 1,
      }));
      state.totalQuantity = totalQuantity;
      state.totalAmount = totalAmount;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.product_id === newItem.product_id);
      state.totalQuantity++;
    
      if (!existingItem) {
        state.items.push({
          product_id: newItem.product_id,
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          id: newItem.id
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
      console.log(state, 'cartSlice_--');
    },
    updateItemQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
    
      if (existingItem) {
        const quantityDifference = quantity - existingItem.quantity;
        state.totalQuantity += quantityDifference;
        state.totalAmount += quantityDifference * existingItem.price;
        existingItem.quantity = quantity;
        existingItem.totalPrice = quantity * existingItem.price;  
      }
    }
  },
});

export const { addItemToCart, deleteItemFromCart, removeItemFromCart, setCart, updateItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
