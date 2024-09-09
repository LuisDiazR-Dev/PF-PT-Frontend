import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCondominiums = createAsyncThunk(
  "condominiums/fetchCondominiums",
  async () => {
    const response = await axios.get("http://localhost:3001/api/condominiums");
    console.log(response.data);
    return response.data;
  }
);

const condominiumSlice = createSlice({
  name: "condominiums",
  initialState: {
    condominiums: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCondominiums.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCondominiums.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.condominiums = action.payload;
      })
      .addCase(fetchCondominiums.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default condominiumSlice.reducer;
