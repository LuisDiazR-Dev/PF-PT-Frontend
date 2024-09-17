import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import endpoint from '../../../_utils/SwitchEndpoints-local-deploy'

export const createCondominium = createAsyncThunk(
	'condominiums/createCondominium',
	async (formData) => {
		const AdminId = localStorage.getItem('id')
		const dataWithAdminId = {
			...formData,
			AdminId: AdminId,
		}

		const response = await axios.post(
			endpoint.condominiumsPost,
			dataWithAdminId
		)

		return response.data
	}
)

const createCondominiumSlice = createSlice({
	name: 'createCondominium',
	initialState: {
		condominium: null,
		loading: false,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(createCondominium.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(createCondominium.fulfilled, (state, action) => {
				state.loading = false
				state.condominium = action.payload

				console.log('Datos del condominio creado:', action.payload)
				localStorage.setItem('currentCondominiumId', action.payload.id)
				localStorage.setItem(
					'condominium_name',
					action.payload.condominium_name
				)
				localStorage.setItem(
					'condominium_country',
					action.payload.condominium_country
				)
				localStorage.setItem(
					'condominium_state',
					action.payload.condominium_state
				)
				localStorage.setItem(
					'condominium_logo',
					action.payload.condominium_logo
				)
				localStorage.setItem(
					'condominiums_apartments_number',
					action.payload.condominiums_apartments_number
				)
				localStorage.setItem('AdminId', action.payload.AdminId)
				localStorage.setItem('imageUrl', action.payload.imageUrl)
				localStorage.setItem('isActive', action.payload.isActive)
			})
			.addCase(createCondominium.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message
			})
	},
})

export default createCondominiumSlice.reducer
