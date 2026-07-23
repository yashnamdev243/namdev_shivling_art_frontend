import { createSlice } from "@reduxjs/toolkit";
import { STORAGE_KEYS } from "../config/constants";

function readStoredUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.user);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

// Hydrate from localStorage so a page refresh doesn't kick the admin
// back to the login screen.
const initialState = {
  user: readStoredUser(),
  token: localStorage.getItem(STORAGE_KEYS.token) || null,
  isAuthenticated: Boolean(localStorage.getItem(STORAGE_KEYS.token)),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },

    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
