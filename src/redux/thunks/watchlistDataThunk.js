import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const fetchLatestPrice = createAsyncThunk(
  "watchlistData/fetchLatestPrice",
  async (symbol) => {
    const response = await api.getLatestPrice(symbol);
    return response.data;
  }
);
