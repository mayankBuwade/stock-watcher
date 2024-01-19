import { createSlice } from "@reduxjs/toolkit";
import { fetchLatestPrice } from "../thunks/watchlistDataThunk";

// ... (import statements)

const initialState = {
  watchlist: [],
  loading: false,
  error: null,
};

const watchlistDataSlice = createSlice({
  name: "watchlistData",
  initialState,
  reducers: {
    addStock: (state, action) => {
      state.watchlist = [...state.watchlist, action.payload];
    },
    deleteStock: (state, action) => {
      state.watchlist = state.watchlist.filter(
        (data) => data.symbol !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLatestPrice.fulfilled, (state, action) => {
      state.watchlist = state.watchlist.map((oldData) =>
        oldData.symbol === action.payload.symbol
          ? { ...oldData, ...action.payload }
          : oldData
      );
    });
  },
});

export default watchlistDataSlice.reducer;
export const { addStock, deleteStock } = watchlistDataSlice.actions;
