import { createSlice } from "@reduxjs/toolkit";

// Small slice for cross-component UI state that doesn't belong to
// server data -- currently just the admin sidebar collapse state.
const uiSlice = createSlice({
  name: "ui",
  initialState: {
    adminSidebarCollapsed: false,
  },
  reducers: {
    toggleAdminSidebar(state) {
      state.adminSidebarCollapsed = !state.adminSidebarCollapsed;
    },
    setAdminSidebarCollapsed(state, action) {
      state.adminSidebarCollapsed = action.payload;
    },
  },
});

export const { toggleAdminSidebar, setAdminSidebarCollapsed } = uiSlice.actions;
export default uiSlice.reducer;
