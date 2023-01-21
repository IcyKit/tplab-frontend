import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Product, SortPayload } from "../../@types";

interface ProductsState {
  products: Product[];
}

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(
      "https://files.rerotor.ru/rerotor/products.json"
    );
    const data = await response.json();
    return data.sort((a: Product, b: Product) => (a.name > b.name ? 1 : -1));
  }
);

const initialState: ProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortProducts: (
      state: ProductsState,
      action: PayloadAction<SortPayload>
    ) => {
      console.log(action.payload);
      if (action.payload.queue === "asc") {
        state.products = state.products.sort((a: Product, b: Product) =>
          a[action.payload.sort] < b[action.payload.sort] ? -1 : 1
        );
      } else {
        state.products = state.products.sort((a: Product, b: Product) =>
          a[action.payload.sort] < b[action.payload.sort] ? 1 : -1
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchProducts.fulfilled,
      (state: ProductsState, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
      }
    );
  },
});

export const { sortProducts } = productsSlice.actions;

export default productsSlice.reducer;
