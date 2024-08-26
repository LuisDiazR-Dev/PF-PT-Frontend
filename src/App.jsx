import { Routes, Route } from 'react-router-dom'

import './App.css'
import NavBar from './components/Navbar/Navbar'
import Landing from './pages/Landing'
import DashboardAdmin from './pages/Dashboard_admin'
import Sidebar from './components/dashboard_admin/Sidebar'

function App() {
	// if (isLoading) return <div>Loading...</div>
	return (
		<div className="container mx-auto">
			{/* <NavBar />

			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/dashboard-admin" element={<DashboardAdmin />} />
			</Routes> */}
			<Sidebar/>
		</div>
	)
}

export default App
