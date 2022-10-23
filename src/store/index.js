import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./modal-slice";

export const store = configureStore({
  reducer: { modal: modalReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
