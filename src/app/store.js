import { configureStore } from "@reduxjs/toolkit";
import { shortenerReducer } from "../features/url-shortener";

export const store = configureStore({
  reducer: {
    shortener: shortenerReducer,
  },
});
