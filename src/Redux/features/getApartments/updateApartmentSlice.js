import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import endpoint from "../../../_utils/SwitchEndpoints-local-deploy";

export const updateApartment = createAsyncThunk(
  "apartments/update",
  async ({ id, apartmentData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        endpoint.updateApartment(id),
        apartmentData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const updateApartmentSlice = createSlice({
  name: "updateApartment",
  initialState: {
    apartment: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateApartment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateApartment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.apartment = action.payload;
      })
      .addCase(updateApartment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default updateApartmentSlice.reducer;
