import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import './App.css'
import NavBar from './components/Navbar/Navbar'
import Landing from './pages/Landing'
import DashboardAdmin from './pages/Dashboard_admin'
import DashboardTenant from './pages/DashBorad_tenant'

function App() {
	const theme = useSelector((state) => state.theme.theme)

	// Aplicar la clase del tema al cargar la aplicación
	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [theme])

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
				<Route path="/dashboard-tenant" element={<DashboardTenant />} />
			</Routes>
		</div>
	)
}

export default App
