import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const deactivateCondominium = createAsyncThunk(
  "condominium/deactivateCondominium",
  async (id) => {
    const response = await fetch(
      `http://localhost:3001/api/condominiums/${id}`,
      {
        method: "DELETE", // Usamos DELETE según el servicio proporcionado
      }
    );
    if (!response.ok) {
      throw new Error("Failed to deactivate condominium");
    }
    return id; // Retorna el ID del condominio desactivado
  }
);

const deactivateCondominiumSlice = createSlice({
  name: "deactivateCondominium", // Nombre del slice
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deactivateCondominium.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deactivateCondominium.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deactivateCondominium.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default deactivateCondominiumSlice.reducer;
