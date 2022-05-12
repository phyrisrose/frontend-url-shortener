import historyReducer from "./historySlice";

describe("history reducer", () => {
  it("should handle initial state", () => {
    expect(historyReducer(undefined, { type: "unknown" })).toEqual({
      loading: false,
      urls: [],
    });
  });
});
