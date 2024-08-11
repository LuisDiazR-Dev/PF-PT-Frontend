import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/counter/Reducer-CounterSlice";


export default configureStore({
	reducer:{
		counter: counter,
		// themeApp: themeApp
	}
})