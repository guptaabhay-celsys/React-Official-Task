import {createSlice} from '@reduxjs/toolkit';

export type InitialProductType = {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  stock: number;
  image_url: string;
  description: string;
  gender: string;
  available_sizes: number[];
  colors_available: string[];
  material: string;
  technology: string;
  brand_name: string;
  category: string;
}

type InitialStateType = {
  products: InitialProductType[],
  filteredProducts: InitialProductType[]
}

const initialState: InitialStateType = {
  products: [],
  filteredProducts: []
}

export type RootState = {
  products: {
    products: InitialProductType[];
    filteredProducts: InitialProductType[];
  }; 
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