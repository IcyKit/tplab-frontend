import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(
      "https://files.rerotor.ru/rerotor/products.json"
    );
    const data = await response.json();
    return data.sort((a, b) => (a.name > b.name ? 1 : -1));
  }
);

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortProducts: (state, action) => {
      console.log(action.payload);
      if (action.payload.queue === "asc") {
        state.products = state.products.sort((a, b) =>
          a[action.payload.sort] < b[action.payload.sort] ? 1 : -1
        );
      } else {
        state.products = state.products.sort((a, b) =>
          a[action.payload.sort] < b[action.payload.sort] ? -1 : 1
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { sortProducts } = productsSlice.actions;

export default productsSlice.reducer;
