import { Routes, Route } from 'react-router-dom'

import './App.css'
import NavBar from './components/Navbar/Navbar'
import Landing from './pages/Landing'

function App() {
	// if (isLoading) return <div>Loading...</div>
	return (
		<div className="container mx-auto">
			<NavBar />

			<Routes>
				<Route path="/" element={<Landing />} />
			</Routes>
		</div>
	)
}

export default App
