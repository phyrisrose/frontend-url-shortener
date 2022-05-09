import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { shortenUrl } from "./shortenerAPI";

const initialState = {
  shortUrl: "",
  loading: false,
};

export const shortenAsync = createAsyncThunk(
  "shortner/shorten",
  async (longUrl) => {
    const response = await shortenUrl(longUrl);
    return response;
  }
);

export const shortenerSlice = createSlice({
  name: "shortner",
  initialState,
  reducers: {
    clearShortUrl: (state) => {
      state.shortUrl = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(shortenAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(shortenAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.shortUrl = action.payload.short_url;
      });
  },
});

export const { clearShortUrl } = shortenerSlice.actions;

export default shortenerSlice.reducer;
