import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/counter/Reducer-CounterSlice";
import theme from "./features/setTheme/Reducer-themeSlice";
import condominiumsReducer from './features/getCondominium/condominiumSlice';

export default configureStore({
	reducer:{
		counter: counter,
		theme: theme,		
		condominiums: condominiumsReducer,
	}
})