import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const fetchData = createAsyncThunk(
  "searchData/fetchData",
  async (searchedText) => {
    const response = await api.getCompaniesDetails(searchedText);
    return response.data;
  }
);
