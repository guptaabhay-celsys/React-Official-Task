import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import cartSlice from './cartSlice';
import wishlistSlice from './wishlistSlice'

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartSlice,
        wishlist: wishlistSlice
    }
})

export default store;