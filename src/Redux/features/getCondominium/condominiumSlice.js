// src/features/condominiums/condominiumSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// Acción asíncrona para obtener los datos usando axios
export const fetchCondominiums = createAsyncThunk(
	'condominiums/fetchCondominiums',
	async () => {
		const response = await axios.get('http://localhost:3001/api/condominiums')
		return response.data // axios ya parsea la respuesta como JSON
	}
)

const condominiumSlice = createSlice({
	name: 'condominiums',
	initialState: {
		condominiums: [],
		selectedCondominium: '',
		status: 'idle',
		error: null,
	},
	reducers: {
		setSelectedCondominium(state, action) {
			state.selectedCondominium = action.payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCondominiums.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchCondominiums.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.condominiums = action.payload
			})
			.addCase(fetchCondominiums.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	},
})

export const { setSelectedCondominium } = condominiumSlice.actions
export default condominiumSlice.reducer
