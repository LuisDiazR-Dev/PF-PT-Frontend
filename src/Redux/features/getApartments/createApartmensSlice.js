import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const createApartment = createAsyncThunk(
	'apartments/create',
	async (apartmentData, { rejectWithValue }) => {
		try {
			const response = await axios.post(
				'http://localhost:3001/api/apartments',
				apartmentData
			)
			return response.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)

const createApartmentSlice = createSlice({
	name: 'createAparments',
	initialState: {
		Apartments: [],
		status: 'idle',
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(createApartment.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(createApartment.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.Apartments.push(action.payload)
			})
			.addCase(createApartment.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	},
})

export default createApartmentSlice.reducer
