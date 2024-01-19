import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../thunks/searchDataThunk";

const initialState = {
  results: [],
  loading: false,
  error: null,
};

const searchDataSlice = createSlice({
  name: "searchData",
  initialState,
  reducers: {
    deleteSearchData: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.results = action.payload;
      state.error = "";
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.results = [];
      state.error = action.error.message;
    });
  },
});

export default searchDataSlice.reducer;
export const { deleteSearchData } = searchDataSlice.actions;
