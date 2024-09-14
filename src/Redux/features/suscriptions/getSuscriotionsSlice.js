import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import endpoint from "../../../_utils/SwitchEndpoints-local-deploy";

export const getSuscriptions = createAsyncThunk(
  "suscriptions/getSuscriptions",
  async () => {
    const response = await axios.get(endpoint.getSuscriptions);
    return response.data;
  }
);

const suscriptionsSlice = createSlice({
  name: "suscriptions",
  initialState: {
    suscriptions: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSuscriptions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSuscriptions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.suscriptions = action.payload;
      })
      .addCase(getSuscriptions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default suscriptionsSlice.reducer;
