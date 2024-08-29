import PropTypes from 'prop-types'
import { useState } from 'react'
import SelectedAdminUser from './SelectedAdminUsers'

const SidebarExtentedUs = ({ onOptionChange }) => {
	const [activeOptionStyle, setActiveOptionStyle] = useState('Administradores')

	const handleOptionClick = (option) => {
		setActiveOptionStyle(option)
		onOptionChange(option)
	}

	const getOptionClasses = (option) => {
		return `flex items-center p-2 text-gray-900 rounded-lg dark:text-white ${
			activeOptionStyle === option
				? 'bg-gray-200 dark:bg-gray-700'
				: 'hover:bg-gray-100 dark:hover:bg-gray-700'
		} group`
	}

	return (
		<aside
			id="logo-sidebar"
			className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
			aria-label="Sidebar"
		>
			<div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
				<ul id="dropdown-example" className="space-y-2 font-medium">
					<li>
						<button
							type="button"
							onClick={() => handleOptionClick('Administradores')}
							className={`
								${getOptionClasses('Administradores')} 
								flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}
							aria-controls="dropdown-example"
							data-collapse-toggle="dropdown-example"
						>
							<span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
								Administradores
								<SelectedAdminUser></SelectedAdminUser>
							</span>
						</button>
					</li>
					<li>
						<a
							href="#"
							onClick={() => handleOptionClick('Suscripciones')}
							className={getOptionClasses('Suscripciones')}
						>
							<svg
								className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 18 18"
							>
								<path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
							</svg>
							<span className="flex-1 ms-3 whitespace-nowrap">
								Suscripciones
							</span>
						</a>
					</li>
					<li className="opacity-50 cursor-not-allowed pointer-events-none">
						<a
							href="#"
							onClick={() => handleOptionClick('Notificaciones')}
							className={getOptionClasses('Notificaciones')}
						>
							<svg
								className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
							</svg>
							<span className="flex-1 ms-3 whitespace-nowrap">
								Notificaciones
							</span>
							<span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
								15
							</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							onClick={() => handleOptionClick('Estadísticas')}
							className={getOptionClasses('Estadísticas')}
						>
							<svg
								className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 22 21"
							>
								<path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
								<path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
							</svg>
							<span className="flex-1 ms-3 whitespace-nowrap">
								Estadísticas
							</span>
							<span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
								Data
							</span>
						</a>
					</li>
					<li>
						<a
							href="/"
							onClick={() => handleOptionClick('Salir')}
							className={getOptionClasses('Salir')}
						>
							<span className="flex-1 ms-3 whitespace-nowrap">Salir</span>
						</a>
					</li>
				</ul>
			</div>
		</aside>
	)
}

SidebarExtentedUs.propTypes = {
	onOptionChange: PropTypes.func.isRequired,
}

export default SidebarExtentedUs
