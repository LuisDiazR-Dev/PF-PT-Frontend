import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchAdmins = createAsyncThunk('admin/fetchAdmins', async () => {
	const response = await axios.get('http://localhost:3001/api/admin')
	return response.data
})

const adminSlice = createSlice({
	name: 'admin',
	initialState: {
		admins: [],
		selectedAdmin: '',
		status: 'idle',
		error: null,
	},
	reducers: {
		setSelectedAdmin(state, action) {
			state.selectedAdmin = action.payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAdmins.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchAdmins.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.admins = action.payload
			})
			.addCase(fetchAdmins.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	},
})

export const { setSelectedAdmin } = adminSlice.actions
export default adminSlice.reducer
