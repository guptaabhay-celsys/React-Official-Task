import {createSlice} from '@reduxjs/toolkit';
import { InitialProductType, InitialStateType } from '../types';

const initialState: InitialStateType = {
  products: [],
  filteredProducts: []
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: { payload: InitialProductType[] }){
      state.products = action.payload;
    },
    filterProducts(state, action) {
      const searchTerm = action.payload.toLowerCase();
      state.filteredProducts = searchTerm
        ? state.products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm)
        )
        : [];
    }
  }
});

export const {setProducts, filterProducts} = productsSlice.actions;
export default productsSlice.reducer;