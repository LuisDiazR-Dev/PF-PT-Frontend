import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import endpoint from "../../../_utils/SwitchEndpoints-local-deploy";

// Thunk para manejar la eliminación lógica
export const deleteAdmin = createAsyncThunk(
  "admin/deleteAdmin",
  async (id, { rejectWithValue }) => {
    try {
      await axios
      // .delete(`http://localhost:3001/api/admin/${id}`);
      .delete(endpoint.AdminDelete(id));
      return id; // Retorna el id para actualizar el estado
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const deleteAdminSlice = createSlice({
  name: "deleteAdmin",
  initialState: {
    status: "idle",
    error: null,
    deletedAdminId: null, // Estado adicional para manejar el ID del administrador eliminado
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteAdmin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteAdmin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.deletedAdminId = action.payload; // Actualiza el estado con el ID del administrador eliminado
      })
      .addCase(deleteAdmin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default deleteAdminSlice.reducer;
