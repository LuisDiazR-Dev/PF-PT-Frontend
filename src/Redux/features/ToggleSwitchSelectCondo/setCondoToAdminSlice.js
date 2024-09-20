import { createSlice } from "@reduxjs/toolkit";

// Función para cargar el estado desde localStorage
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("setCondoToAdmin");
    return serializedState ? JSON.parse(serializedState) : { condoStatus: {} };
  } catch (error) {
    console.error("Error loading state from localStorage", error);
    return { condoStatus: {} };
  }
};

// Función para guardar el estado en localStorage
const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("setCondoToAdmin", serializedState);
  } catch (error) {
    console.error("Error saving state to localStorage", error);
  }
};

export const setCondoToAdminSlice = createSlice({
  name: "setCondoToAdmin",
  initialState: loadStateFromLocalStorage(),
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

      // Guardar el estado actualizado en localStorage
      saveStateToLocalStorage(state);
    },
  },
});

// Exportar las acciones
export const { setSelectCondoToAdmin } = setCondoToAdminSlice.actions;

// Exportar el reducer
export default setCondoToAdminSlice.reducer;

// // toggle por card
// import { createSlice } from "@reduxjs/toolkit";

// export const setCondoToAdminSlice = createSlice({
//   name: "setCondoToAdmin",
//   initialState: {
//     condoStatus: {} // Almacenará el estado de cada condominio por su id
//   },
//   reducers: {
//     setSelectCondoToAdmin: (state, action) => {
//       const { id, status } = action.payload;

//       // Si el condominio está activado, solo guarda ese ID y su estado
//       if (status) {
//         state.selectedCondoId = id;
//         state.isSelected = true;
//       } else {
//         // Si se desactiva, limpia el ID y el estado
//         state.selectedCondoId = null;
//         state.isSelected = false;
//       }
//     },
//   },
// });

// // Exportar las acciones
// export const { setSelectCondoToAdmin } = setCondoToAdminSlice.actions;

// // Exportar el reducer
// export default setCondoToAdminSlice.reducer;
