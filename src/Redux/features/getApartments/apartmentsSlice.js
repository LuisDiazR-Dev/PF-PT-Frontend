import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchApartments = createAsyncThunk(
	'apartments/fetchApartments',
	async () => {
		const response = await axios.get('http://localhost:3001/api/apartments')
		return response.data
	}
)

const apartmentSlice = createSlice({
	name: 'apartments',
	initialState: {
		apartments: [],
		status: 'idle',
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchApartments.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchApartments.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.apartments = action.payload
			})
			.addCase(fetchApartments.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	},
})

export default apartmentSlice.reducer
