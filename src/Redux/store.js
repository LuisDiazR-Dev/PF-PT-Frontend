import { configureStore } from '@reduxjs/toolkit'
import counter from './features/counter/Reducer-CounterSlice'
import theme from './features/setTheme/Reducer-themeSlice'
import condominiumsReducer from './features/getCondominium/condominiumSlice'
import apartmentSlice from './features/getApartments/apartmentsSlice'
import adminReducer from './features/tenants/getAdminsUsersSlice'
import createApartmensSlice from './features/getApartments/createApartmensSlice'

export default configureStore({
	reducer: {
		counter: counter,
		theme: theme,
		condominiums: condominiumsReducer,
		apartments: apartmentSlice,
		createApartment: createApartmensSlice,
		admin: adminReducer,
	},
})
