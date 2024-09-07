import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const updateCondominium = createAsyncThunk(
	'condominiums/updateCondominium',
	async ({ id, updatedData }, { rejectWithValue }) => {
		try {
			const AdminId = localStorage.getItem('id')
			const dataWithAdminId = {
				...updatedData,
				AdminId: AdminId,
			}

			const response = await axios.put(
				`http://localhost:3001/api/condominiums/${id}`,
				dataWithAdminId
			)

			return response.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)

const updateCondominiumSlice = createSlice({
	name: 'updateCondominium',
	initialState: {
		condominium: null,
		loading: false,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(updateCondominium.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(updateCondominium.fulfilled, (state, action) => {
				state.loading = false
				state.condominium = action.payload.condominium

				console.log(
					'Datos del condominio actualizado:',
					action.payload.condominium
				)
				localStorage.setItem(
					'condominium_name',
					action.payload.condominium.condominium_name
				)
				localStorage.setItem(
					'condominium_country',
					action.payload.condominium.condominium_country
				)
				localStorage.setItem(
					'condominium_state',
					action.payload.condominium.condominium_state
				)
				localStorage.setItem(
					'condominium_logo',
					action.payload.condominium.condominium_logo
				)
				localStorage.setItem(
					'condominiums_apartments_number',
					action.payload.condominium.condominiums_apartments_number
				)
				localStorage.setItem('imageUrl', action.payload.condominium.imageUrl)
				localStorage.setItem('isActive', action.payload.condominium.isActive)
				localStorage.setItem('AdminId', action.payload.condominium.AdminId)
			})
			.addCase(updateCondominium.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})
	},
})

export default updateCondominiumSlice.reducer
