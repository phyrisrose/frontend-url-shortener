import { configureStore } from "@reduxjs/toolkit";
import { shortenerReducer } from "../features/url-shortener";
import { historyReducer } from "../features/url-history";

export const store = configureStore({
  reducer: {
    shortener: shortenerReducer,
    history: historyReducer,
  },
});
