import { Routes, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Landing from './pages/Landing'

function App() {
	// if (isLoading) return <div>Loading...</div>
	return (
		<div className="container mx-auto">
			<Navbar />
			<hr />
			<Routes>
				<Route path="/" element={<Landing />} />
			</Routes>
		</div>
	)
}

export default App
