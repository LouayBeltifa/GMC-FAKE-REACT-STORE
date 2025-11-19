import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import favouriteReducer from "./favouriteSlice";
import checkoutReducer from "./checkoutSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favourite: favouriteReducer,
    checkout: checkoutReducer,
  },
});
