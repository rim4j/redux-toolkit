import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./feature/cart/cartSlice";
import themeReducer from "./feature/theme/themeSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,
  },
});
