// Store.js
import { configureStore } from "@reduxjs/toolkit";
import quantityReducer from "../Reducer/QuantityReducer";
import cartReducer from "../Reducer/CartReducer";

const store = configureStore({
  reducer: {
    quantity: quantityReducer,
    cart: cartReducer
  },
});

export default store;
