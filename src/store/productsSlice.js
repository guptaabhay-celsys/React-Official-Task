import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  products: [],
  filteredProducts: []
}


const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action){
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