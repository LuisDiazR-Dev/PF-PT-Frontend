import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import endpoint from '../../../_utils/SwitchEndpoints-local-deploy'

export const createApartment = createAsyncThunk(
	'apartments/create',
	async (apartmentData, { rejectWithValue }) => {
		try {
			const response = await axios.post(
				endpoint.createApartment,
				apartmentData
			)
			return response.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)

const createApartmentSlice = createSlice({
	name: 'createApartments',
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
