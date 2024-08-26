import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar/Navbar'
import Landing from './pages/Landing'
import DashboardAdmin from './pages/Dashboard_admin'

function App() {
	const location = useLocation()

	// Rutas en las que la NavBar se oculta
	const hiddenNavBarRoutes = ['/dashboard-admin']

	return (
		// <div className="container mx-auto">
		<div className="">
			{/* Solo renderiza la NavBar si la ruta actual no está en hiddenNavBarRoutes */}
			{!hiddenNavBarRoutes.includes(location.pathname) && <NavBar />}

			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/dashboard-admin" element={<DashboardAdmin />} />
			</Routes>
		</div>
	)
}

export default App
