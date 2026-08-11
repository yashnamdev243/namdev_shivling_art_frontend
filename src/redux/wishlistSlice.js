import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import wishlistService from "../services/wishlistService";

export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async (_, { rejectWithValue }) => {
    try {
      const response = await wishlistService.list();
      return response?.items || [];
    } catch (error) {
      return rejectWithValue(error?.message || "Unable to load wishlist.");
    }
  }
);

export const toggleWishlist = createAsyncThunk(
  "wishlist/toggleWishlist",
  async (productId, { rejectWithValue }) => {
    try {
      return await wishlistService.toggle(productId);
    } catch (error) {
      return rejectWithValue(error?.message || "Unable to update wishlist.");
    }
  }
);

export const removeWishlist = createAsyncThunk(
  "wishlist/removeWishlist",
  async (productId, { rejectWithValue }) => {
    try {
      return await wishlistService.remove(productId);
    } catch (error) {
      return rejectWithValue(error?.message || "Unable to remove wishlist item.");
    }
  }
);

const idOf = (item) => Number(item?._id || item?.id || item?.product_id);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { items: [], loading: false, error: null },
  reducers: {
    clearWishlist: (state) => { state.items = []; state.error = null; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(fetchWishlist.fulfilled, (state, action) => { state.loading = false; state.items = action.payload; })
      .addCase(fetchWishlist.rejected, (state, action) => { state.loading = false; state.error = action.payload; })
      .addCase(toggleWishlist.pending, (state) => { state.loading = true; })
      .addCase(toggleWishlist.fulfilled, (state, action) => {
        state.loading = false;
        const response = action.payload;
        const productId = Number(response?.productId);
        if (response?.wishlisted === false) {
          state.items = state.items.filter((item) => idOf(item) !== productId);
        } else if (response?.wishlisted === true && response?.product && !state.items.some((item) => idOf(item) === idOf(response.product))) {
          state.items.unshift(response.product);
        }
      })
      .addCase(toggleWishlist.rejected, (state, action) => { state.loading = false; state.error = action.payload; })
      .addCase(removeWishlist.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => idOf(item) !== Number(action.payload?.productId));
      });
  },
});

export const { clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
