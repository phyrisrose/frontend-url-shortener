import shortenerReducer, { clearShortUrl } from "./shortnenerSlice";

describe("shortener reducer", () => {
  const initialState = {
    loading: false,
    shortUrl: "url.me",
  };

  it("should handle initial state", () => {
    expect(shortenerReducer(undefined, { type: "unknown" })).toEqual({
      loading: false,
      shortUrl: "",
    });
  });

  it("should handle clear short url", () => {
    const actual = shortenerReducer(initialState, clearShortUrl());
    expect(actual.shortUrl).toEqual("");
  });
});
