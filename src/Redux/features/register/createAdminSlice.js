import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const registerAdmin = createAsyncThunk(
	'createAdmin',
	async (formData) => {
		const response = await axios.post(
			'http://localhost:3001/api/admin',
			formData
		)
		return response.data
	}
)

const adminRegisterSlice = createSlice({
	name: 'createAdmin',
	initialState: {
		admin: null,
		loading: false,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(registerAdmin.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(registerAdmin.fulfilled, (state, action) => {
				state.loading = false
				state.admin = action.payload.admin
				localStorage.setItem('id', action.payload.admin.id)
				localStorage.setItem('username', action.payload.admin.username)
				localStorage.setItem('email', action.payload.admin.email)
				localStorage.setItem('imageUrl', action.payload.admin.imageUrl)
				localStorage.setItem('isActive', action.payload.admin.isActive)
				localStorage.setItem(
					'SuscriptionId',
					action.payload.admin.SuscriptionId
				)
			})
			.addCase(registerAdmin.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message
			})
	},
})

export default adminRegisterSlice.reducer
