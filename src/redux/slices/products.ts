import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Product, SortPayload } from "../../@types";
import product from "../../pages/Product";

interface ProductsState {
  products: Product[];
  filteredProducts: Product[];
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
  filteredProducts: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortProducts: (
      state: ProductsState,
      action: PayloadAction<SortPayload>
    ) => {
      if (action.payload.queue === "asc") {
        state.filteredProducts = state.filteredProducts.sort(
          (a: Product, b: Product) =>
            a[action.payload.sort] < b[action.payload.sort] ? -1 : 1
        );
      } else {
        state.filteredProducts = state.filteredProducts.sort(
          (a: Product, b: Product) =>
            a[action.payload.sort] < b[action.payload.sort] ? 1 : -1
        );
      }
    },
    searchProduct: (state: ProductsState, action: PayloadAction<string>) => {
      state.filteredProducts = state.products.filter(
        (product: Product) =>
          product.name.includes(action.payload) ||
          product.category.includes(action.payload)
      );
    },
    sortByStars: (
      state: ProductsState,
      action: PayloadAction<number | null>
    ) => {
      if (!action.payload) {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter(
          (product: Product) => product.stars == action.payload
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchProducts.fulfilled,
      (state: ProductsState, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
        state.filteredProducts = action.payload;
      }
    );
  },
});

export const { sortProducts, searchProduct, sortByStars } =
  productsSlice.actions;

export default productsSlice.reducer;
