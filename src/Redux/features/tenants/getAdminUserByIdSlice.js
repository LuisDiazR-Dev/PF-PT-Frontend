import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import endpoint from "../../../_utils/SwitchEndpoints-local-deploy";

export const getAdminById = createAsyncThunk(
  "admin/getAdminById",
  async (id) => {
    const response = await axios
    // .get(`http://localhost:3001/api/admin/${id}`);
    .get(endpoint.AdminGetById(id));
    return response.data;
  }
);

const getAdminByIdSlice = createSlice({
  name: "admin",
  initialState: {
    admin: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdminById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAdminById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.admin = action.payload;
      })
      .addCase(getAdminById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default getAdminByIdSlice.reducer;
