import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHistory, expireUrl } from "./historyAPI";

const initialState = {
  urls: [
    // {
    //   short_url: "http://bely.me/mZ9G",
    //   slug: "mZ9G",
    //   url: "https://gb.com/shorty",
    // },
  ],
  loading: false,
};

export const getHistoryAsync = createAsyncThunk("history/get", async () => {
  const response = await getHistory();
  return response;
});

export const expireUrlAsync = createAsyncThunk(
  "history/expire",
  async (slug) => {
    const response = await expireUrl(slug);
    return response;
  }
);

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHistoryAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getHistoryAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.urls = action.payload;
      })
      .addCase(expireUrlAsync.pending, (state) => {
        /**
         * @todo loading flag for getting, and deleting would
         * ideally not be one and the same
         */
        state.loading = true;
      })
      .addCase(expireUrlAsync.fulfilled, (state) => {
        console.log("expired successfully");
        state.loading = false;
      });
    /** @todo add error case */
  },
});

export default historySlice.reducer;
