import { useState } from 'react'
import ApartmentsView from '../components/dashboard_admin/ViewApartments'
import ServicesTab from '../components/dashboard_admin/ViewServices'
import SidebarExtended from '../components/dashboard_admin/SidebarExtended'
import UserMenu from '../components/dashboard_admin/AdminProfileMenu'
import LogoNavbar from '../components/Navbar/LogoNavbar'

const DashboardAdmin = () => {
	const [activeSection, setActiveSection] = useState('')
	const [showCreateForm, setShowCreateForm] = useState(false)

	const componentMap = {
		Apartamentos: () => <ApartmentsView showCreateForm={showCreateForm} />,
		Servicios: ServicesTab,
		Notificaciones: () => (
			<div className="p-20 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
				Notificaciones - Próximamente
			</div>
		),
		Estadísticas: () => (
			<div className="p-20 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
				Estadísticas - Próximamente
			</div>
		),
	}

	const ActiveComponent = componentMap[activeSection] || ApartmentsView

	const handleOptionChange = (option) => {
		setActiveSection(option)
		if (option === 'Crear') {
			setShowCreateForm(true)
		} else {
			setShowCreateForm(false)
		}
	}

	return (
		<div className="dashboard-admin">
			<nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
				<div className="px-3 py-3 lg:px-5 lg:pl-3">
					<div className="flex items-center justify-between">
						<div className="flex items-center justify-start rtl:justify-end">
							<button
								data-drawer-target="logo-sidebar"
								data-drawer-toggle="logo-sidebar"
								aria-controls="logo-sidebar"
								type="button"
								className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							>
								<span className="sr-only">Open sidebar</span>
								<svg
									className="w-6 h-6"
									aria-hidden="true"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										clipRule="evenodd"
										fillRule="evenodd"
										d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
									></path>
								</svg>
							</button>
							{/* --------------- logo ----------- */}
							<LogoNavbar></LogoNavbar>
						</div>

						{/* ----------------User Menu */}
						<UserMenu></UserMenu>
					</div>
				</div>
			</nav>

			{/* Sidebar con función de cambio de opción */}
			<SidebarExtended onOptionChange={handleOptionChange} />

			{/* ------------------ render-section -------------- */}
			<div className="render-section p-2 sm:ml-64">
				<ActiveComponent showCreateForm={showCreateForm} />
			</div>
		</div>
	)
}

export default DashboardAdmin
