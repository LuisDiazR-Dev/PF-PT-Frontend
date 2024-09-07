import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const updateAdminDetails = createAsyncThunk(
	'adminUpdate/updateAdminDetails',
	async ({ updatedData }, { rejectWithValue }) => {
		try {
			const token = localStorage.getItem('token')
			const id = localStorage.getItem('id')

			if (!id) {
				throw new Error('ID del administrador no encontrado')
			}

			const response = await axios.put(
				`http://localhost:3001/api/admin/${id}`,
				updatedData,
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			)
			return response.data // Devuelve los datos actualizados del administrador
		} catch (error) {
			return rejectWithValue(error.response.data) // Maneja errores
		}
	}
)

const adminUpdateSlice = createSlice({
	name: 'adminUpdate',
	initialState: {
		admin: null,
		loading: false,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(updateAdminDetails.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(updateAdminDetails.fulfilled, (state, action) => {
				state.loading = false
				state.admin = action.payload

				localStorage.setItem('username', action.payload.username)
				localStorage.setItem('email', action.payload.email)
				localStorage.setItem('imageUrl', action.payload.imageUrl)
				localStorage.setItem('isActive', action.payload.isActive)
				localStorage.setItem('SuscriptionId', action.payload.SuscriptionId)
			})
			.addCase(updateAdminDetails.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})
	},
})

export default adminUpdateSlice.reducer
