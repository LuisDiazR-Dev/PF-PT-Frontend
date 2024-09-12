import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import endpoint from "../../../_utils/SwitchEndpoints-local-deploy";
import axios from "axios";

// Define la acción asíncrona para el inicio de sesión
export const loginAdmin = createAsyncThunk(
  "loginAdmin",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios
      .post( endpoint.registerLogin, formData );
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

const loginAdminSlice = createSlice({
  name: "loginAdmin",
  initialState: {
    admin: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        console.log("Respuesta exitosa:", action.payload);
        state.loading = false;
        state.admin = action.payload.admin;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        console.error("Error en login:", action.payload);
        state.loading = false;
        state.error = action.payload || "Error desconocido";
      });
  },
});

export default loginAdminSlice.reducer;
