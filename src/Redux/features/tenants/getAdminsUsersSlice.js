import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import endpoint from "../../../_utils/SwitchEndpoints-local-deploy";

export const fetchAdmins = createAsyncThunk("admins/fetchAdmins", async () => {
  const response = await axios
  // .get("http://localhost:3001/api/admin");
  .get(endpoint.AdminGet);
  return response.data;
});

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
      .addCase(fetchAdmins.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAdmins.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.admins = action.payload;
      })
      .addCase(fetchAdmins.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default adminSlice.reducer;
