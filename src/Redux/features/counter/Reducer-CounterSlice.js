import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
	// Nombre para importar en el store
	name:"counter",

	// estado inicial
	initialState:{
		value: 0
	},

	//funciones para manejar el estado
	reducers:{
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reSet: (state) => {
      state.value = 0;
    },
		incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
	}
})

// exportar las funciones									// en .action están guardadas las funciones
export const { increment, decrement, reSet, incrementByAmount} = counterSlice.actions

// exportar el reducer 
export default counterSlice.reducer