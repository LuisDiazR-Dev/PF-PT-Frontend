import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import endpoint from "../../../_utils/SwitchEndpoints-local-deploy";

export const deleteApartment = createAsyncThunk(
  "apartments/delete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(endpoint.deleteApartment(id));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const deleteApartmentSlice = createSlice({
  name: "deleteApartment",
  initialState: {
    apartment: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteApartment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteApartment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.apartment = action.payload;
      })
      .addCase(deleteApartment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default deleteApartmentSlice.reducer;
