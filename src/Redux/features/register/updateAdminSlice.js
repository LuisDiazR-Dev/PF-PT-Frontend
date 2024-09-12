import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import endpoint from "../../../_utils/SwitchEndpoints-local-deploy";

import axios from "axios";

export const updateAdmin = createAsyncThunk(
  "admin/updateAdmin",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${endpoint.registerUpdate}/${id}`,
        updatedData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const adminUpdateSlice = createSlice({
  name: "adminUpdate",
  initialState: {
    admin: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload.admin;
      })
      .addCase(updateAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default adminUpdateSlice.reducer;
