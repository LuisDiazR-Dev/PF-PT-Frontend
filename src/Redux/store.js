import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/counter/Reducer-CounterSlice";
// import theme from "./features/Theme-change/themeSlice";
import theme from "./features/theme/Reducer-themeSlice";


export default configureStore({
	reducer:{
		counter: counter,
		theme: theme,

		
	}
})