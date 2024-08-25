import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	const [isCollapsed, setIsCollapsed] = useState(true);

	const toggleSidebar = () => {
		setIsCollapsed(!isCollapsed);
	};

	return (
		<div>
			<aside
				className={`${
					isCollapsed ? 'w-20' : 'w-64'
				} transition-all h-screen duration-300 bg-gray-800 text-white fixed top-0 left-0 z-20`}
			>
				<div className="overflow-y-auto py-4 px-3">
					<button
						onClick={toggleSidebar}
						className="p-2 bg-blue-500 text-white rounded-md fixed z-30 top-4 left-14 transform -translate-x-full"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 7.5h16.5M3.75 12h16.5m-16.5 4.5h16.5"
							/>
						</svg>
					</button>
					<br />
					<br />
					<br />
					<ul className="space-y-2">
						<li>
							<Link
								to="/apartamento"
								className="flex items-center p-2 hover:bg-gray-700 rounded-lg"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="w-6 h-6 text-gray-400"
								>
									<path d="M3.75 3v7.806c0 5.163 3.78 9.754 8.805 10.63 5.037-.874 8.82-5.466 8.82-10.63V3H3.75zm1.5 0h15v7.806c0 4.353-3.174 8.168-7.305 8.929C8.424 18.974 5.25 15.16 5.25 10.806V3z" />
								</svg>
								{!isCollapsed && <span className="ml-3">Apartamento</span>}
							</Link>
						</li>
						<li>
							<Link
								to="/notificaciones"
								className="flex items-center p-2 hover:bg-gray-700 rounded-lg"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="w-6 h-6 text-gray-400"
								>
									<path d="M12 2a7.5 7.5 0 00-7.5 7.5v5.086a3 3 0 01-.832 2.034A2.992 2.992 0 006.5 19.5h11a2.992 2.992 0 002.832-2.88 3 3 0 01-.832-2.034V9.5A7.5 7.5 0 0012 2zm0 17.5c-1.104 0-2 .896-2 2h4c0-1.104-.896-2-2-2z" />
								</svg>
								{!isCollapsed && (
									<span className="ml-3">Notificaciones</span>
								)}
							</Link>
						</li>
						<li>
							<Link
								to="/servicio"
								className="flex items-center p-2 hover:bg-gray-700 rounded-lg"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="w-6 h-6 text-gray-400"
								>
									<path
										fillRule="evenodd"
										d="M8.25 7a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM12 4.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm7.478 12.94a7.5 7.5 0 0 0-14.956 0 .75.75 0 1 1-1.481-.28 9 9 0 0 1 17.918 0 .75.75 0 1 1-1.481.28Z"
										clipRule="evenodd"
									/>
								</svg>
								{!isCollapsed && <span className="ml-3">Servicio</span>}
							</Link>
						</li>
						<li>
							<Link
								to="/estadistica"
								className="flex items-center p-2 hover:bg-gray-700 rounded-lg"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
									/>
								</svg>
								{!isCollapsed && <span className="ml-3">Estadistica</span>}
							</Link>
						</li>
						<li>
							<Link
								to="/pagos"
								className="flex items-center p-2 hover:bg-gray-700 rounded-lg"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
									/>
								</svg>
								{!isCollapsed && <span className="ml-3">Pagos</span>}
							</Link>
						</li>
						<li>
							<Link
								to="/addcondominio"
								className="flex items-center p-2 hover:bg-gray-700 rounded-lg"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 9v3m0 0v3m0-3h3m-3 0H9m2.25 3.75A7.5 7.5 0 0 1 4.5 12a7.5 7.5 0 0 1 14.7 3M12 21v-2m0 0V9m0 10v2m-9-7.5V8m18 5.5V8"
									/>
								</svg>
								{!isCollapsed && <span className="ml-3">Agregar Condominio</span>}
							</Link>
						</li>
					</ul>
				</div>
			</aside>
			{/* Content above Sidebar for mobile view toggle button */}
			<div className="p-4 w-screen fixed left-0 top-0 flex justify-around bg-gray-800 z-10">
				<div>nombre</div>
				<input type="text" placeholder="buscar condominio" />
				<div>filtro</div>
			</div>
		</div>
	);
};

export default Sidebar;
