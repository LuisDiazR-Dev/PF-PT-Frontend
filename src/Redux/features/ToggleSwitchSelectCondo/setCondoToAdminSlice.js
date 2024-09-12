// toggle por card
import { createSlice } from "@reduxjs/toolkit";

export const setCondoToAdminSlice = createSlice({
  name: "setCondoToAdmin",
  initialState: {
    condoStatus: {} // Almacenará el estado de cada condominio por su id
  },
  reducers: {
    setSelectCondoToAdmin: (state, action) => {
      const { id, status } = action.payload;

      // Si el condominio está activado, solo guarda ese ID y su estado
      if (status) {
        state.selectedCondoId = id;
        state.isSelected = true;
      } else {
        // Si se desactiva, limpia el ID y el estado
        state.selectedCondoId = null;
        state.isSelected = false;
      }
    },
  },
});

// Exportar las acciones
export const { setSelectCondoToAdmin } = setCondoToAdminSlice.actions;

// Exportar el reducer
export default setCondoToAdminSlice.reducer;
