import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCondoById = createAsyncThunk(
  "condominiums/getCondoById",
  async (id) => {
    const response = await axios.get(
      `http://localhost:3001/api/condominiums/${id}`
    );
    console.log(response.data);
    return response.data;
  }
);

const getCondoByIdSlice = createSlice({
  name: "Condominium",
  initialState: {
    condominium: {
      AdminId: null,
      condominium_country: "",
      condominium_logo: "",
      condominium_name: "",
      condominium_state: "",
      condominiums_apartments_number: 0,
      id: null,
      imageUrl: "",
      isActive: false,
    },
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCondoById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCondoById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.condominium = {
          ...action.payload,
        };
      })
      .addCase(getCondoById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default getCondoByIdSlice.reducer;
