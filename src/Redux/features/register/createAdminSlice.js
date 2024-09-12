import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import endpoint from "../../../_utils/SwitchEndpoints-local-deploy";
import axios from "axios";

export const registerAdmin = createAsyncThunk(
  "registerAdmin",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        endpoint.registerCreate,
        formData
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const adminRegisterSlice = createSlice({
  name: "registerAdmin",
  initialState: {
    admin: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload.admin;
      })
      .addCase(registerAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error Inesperado";
      });
  },
});

export default adminRegisterSlice.reducer;
