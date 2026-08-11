// import { createSlice } from "@reduxjs/toolkit";
// import { STORAGE_KEYS } from "../config/constants";

// function readStoredUser() {
//   try {
//     const raw = localStorage.getItem(STORAGE_KEYS.user);
//     return raw ? JSON.parse(raw) : null;
//   } catch {
//     return null;
//   }
// }

// // Hydrate from localStorage so a page refresh doesn't kick the admin
// // back to the login screen.
// const initialState = {
//   user: readStoredUser(),
//   token: localStorage.getItem(STORAGE_KEYS.token) || null,
//   isAuthenticated: Boolean(localStorage.getItem(STORAGE_KEYS.token)),
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     loginSuccess(state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isAuthenticated = true;
//     },

//     logout(state) {
//       state.user = null;
//       state.token = null;
//       state.isAuthenticated = false;
//     },
//   },
// });

// export const { loginSuccess, logout } = authSlice.actions;

// export default authSlice.reducer;



import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../services/authService";

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await authService.me();

      return response?.user || response?.data || response;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Unable to get current user"
      );
    }
  }
);

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  initialized: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;

      state.user = user || null;
      state.token = token || null;
      state.isAuthenticated = Boolean(token && user);
      state.error = null;
    },

    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = Boolean(action.payload);
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
    },

    clearAuthError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.initialized = true;
        state.user = action.payload;
        state.isAuthenticated = Boolean(action.payload);
      })

      .addCase(getCurrentUser.rejected, (state) => {
        state.loading = false;
        state.initialized = true;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
      });
  },
});

export const {
  setCredentials,
  setUser,
  logout,
  clearAuthError,
} = authSlice.actions;

export default authSlice.reducer;