import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../redux/authSlice";
import productReducer from "../redux/productSlice";
import categoryReducer from "../redux/categorySlice";
import uiReducer from "../redux/uiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    categories: categoryReducer,
    ui: uiReducer,
  },
});
