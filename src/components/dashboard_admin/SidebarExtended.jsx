import PropTypes from 'prop-types'
import { useState } from 'react'
import SelectCondominium from './SelectCondominium'
import SidebarFooter from './SidebarFooter'
import AptoIcon from './incons/AptoIcon'
import DropDownArrow from './incons/DropDownArrow'

const SidebarExtended = ({ onOptionChange }) => {
	const [activeOptionStyle, setActiveOptionStyle] = useState('Apartamentos')
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)

	const handleOptionClick = (option) => {
		setActiveOptionStyle(option)

		onOptionChange(option)
		if (option === 'Apartamentos') {
			setIsDropdownOpen(!isDropdownOpen)
		} else if (option === 'allApto') {
			setIsDropdownOpen(isDropdownOpen)
		} else if (option === 'createApto') {
			setIsDropdownOpen(isDropdownOpen)
		} else {
			setIsDropdownOpen(false)
		}
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
				<ul className="space-y-2 font-medium pb-4">
					<li>
						<SelectCondominium></SelectCondominium>
					</li>
				</ul>
				<ul id="dropdown-example" className="space-y-2 font-medium">
					<li>
						<button
							type="button"
							onClick={() => handleOptionClick('Apartamentos')}
							className={`
								${getOptionClasses('Apartamentos')} 
								flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}
							aria-controls="dropdown-example"
							data-collapse-toggle="dropdown-example"
						>
							<AptoIcon />
							<span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
								Apartamentos
							</span>
							<DropDownArrow />
						</button>

						{isDropdownOpen && (
							<ul className="py-2 space-y-2">
								<li>
									<a
										// href="/"
										onClick={() => handleOptionClick('allApto')}
										className={`
											${getOptionClasses('allApto')} 
										flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}
									>
										Todos
									</a>
								</li>
								<li>
									<a
										// href="/"
										onClick={() => handleOptionClick('createApto')}
										className={`
											${getOptionClasses('createApto')} 
										flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}
									>
										Crear
									</a>
								</li>
							</ul>
						)}
					</li>

					<li>
						<a
							href="#"
							onClick={() => handleOptionClick('Servicios')}
							className={getOptionClasses('Servicios')}
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
								Áreas Comunes
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
								3
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
								Pro
							</span>
						</a>
					</li>
				</ul>
				<SidebarFooter></SidebarFooter>
			</div>
		</aside>
	)
}
SidebarExtended.propTypes = {
	onOptionChange: PropTypes.func.isRequired,
}

export default SidebarExtended

// import SelectCondominium from './SelectCondominium'

// const SidebarExtended = () => {
// 	return (
// 		<aside
// 			id="logo-sidebar"
// 			className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
// 			aria-label="Sidebar"
// 		>
// 			<div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
// 				<ul className="space-y-2 font-medium pb-4">
// 					<li>
// 						<SelectCondominium></SelectCondominium>
// 					</li>
// 				</ul>
// 				<ul className="space-y-2 font-medium">
// 					<li>
// 						<a
// 							href="#"
// 							className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
// 						>
// 							<svg
// 								className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
// 								aria-hidden="true"
// 								xmlns="http://www.w3.org/2000/svg"
// 								fill="currentColor"
// 								viewBox="0 0 20 18"
// 							>
// 								<path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
// 							</svg>
// 							<span className="ms-3">Apartamentos</span>
// 						</a>
// 					</li>
// 					<li>
// 						<a
// 							href="#"
// 							className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
// 						>
// 							<svg
// 								className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
// 								aria-hidden="true"
// 								xmlns="http://www.w3.org/2000/svg"
// 								fill="currentColor"
// 								viewBox="0 0 18 18"
// 							>
// 								<path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
// 							</svg>
// 							<span className="flex-1 ms-3 whitespace-nowrap">Servicios</span>
// 						</a>
// 					</li>
// 					<li>
// 						<a
// 							href="#"
// 							className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
// 						>
// 							<svg
// 								className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
// 								aria-hidden="true"
// 								xmlns="http://www.w3.org/2000/svg"
// 								fill="currentColor"
// 								viewBox="0 0 20 20"
// 							>
// 								<path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
// 							</svg>
// 							<span className="flex-1 ms-3 whitespace-nowrap">
// 								Notificaciones
// 							</span>
// 							<span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
// 								3
// 							</span>
// 						</a>
// 					</li>
// 					<li>
// 						<a
// 							href="#"
// 							className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
// 						>
// 							<svg
// 								className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
// 								aria-hidden="true"
// 								xmlns="http://www.w3.org/2000/svg"
// 								fill="currentColor"
// 								viewBox="0 0 22 21"
// 							>
// 								<path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
// 								<path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
// 							</svg>
// 							<span className="flex-1 ms-3 whitespace-nowrap">
// 								Estadísticas
// 							</span>
// <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
// 	Pro
// </span>
// 						</a>
// 					</li>
// 				</ul>

// <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
// 	<li>
// 		<a
// 			href="#"
// 			className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
// 		>
// 			<svg
// 				className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
// 				aria-hidden="true"
// 				xmlns="http://www.w3.org/2000/svg"
// 				fill="currentColor"
// 				viewBox="0 0 20 20"
// 			>
// 				<path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
// 				<path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
// 				<path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
// 			</svg>
// 			<span className="flex-1 ms-3 whitespace-nowrap">
// 				Agregar Condominio +
// 			</span>
// 		</a>
// 	</li>
// 	<li>
// 		<button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
// 			<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
// 				Haste Pro
// 			</span>
// 		</button>
// 	</li>

// 	{/*  */}
// 	<li>
// 		<a
// 			href="#"
// 			className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
// 		>
// 			<svg
// 				className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
// 				aria-hidden="true"
// 				xmlns="http://www.w3.org/2000/svg"
// 				fill="none"
// 				viewBox="0 0 18 16"
// 			>
// 				<path
// 					stroke="currentColor"
// 					strokeLinecap="round"
// 					strokeLinejoin="round"
// 					strokeWidth="2"
// 					d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
// 				/>
// 			</svg>
// 			<span className="flex-1 ms-3 whitespace-nowrap">Salir</span>
// 		</a>
// 	</li>
// </ul>
// 			</div>
// 		</aside>
// 	)
// }

// export default SidebarExtended
