import App from './App.jsx'
import './index.css'
// import Routes from './routes/Routes.jsx'

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Redux/store.js'

createRoot(document.getElementById('root')).render(
	// ReactDOM.createRoot(document.getElementById('root')).render(

	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
	// <Provider store={store}>
	// 	<Routes />
	// </Provider>
)
