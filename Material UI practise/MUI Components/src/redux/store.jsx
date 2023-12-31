import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  devTools: true,
});