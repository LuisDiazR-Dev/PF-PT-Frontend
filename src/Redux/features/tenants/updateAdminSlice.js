import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import endpoint from "../../../_utils/SwitchEndpoints-local-deploy";

export const activateAdmin = createAsyncThunk(
  "admins/activateAdmin",
  async (id) => {
    const response = await axios
    // .put(`http://localhost:3001/api/admin/${id}`, {
    .put(endpoint.AdminPut(id), {
      isActive: true,
    });
    return response.data;
  }
);

const adminSlice = createSlice({
  name: "admins",
  initialState: {
    admins: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(activateAdmin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(activateAdmin.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedAdmin = action.payload;
        const index = state.admins.findIndex(
          (admin) => admin.id === updatedAdmin.id
        );
        if (index !== -1) {
          state.admins[index] = updatedAdmin;
        }
      })
      .addCase(activateAdmin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default adminSlice.reducer;
