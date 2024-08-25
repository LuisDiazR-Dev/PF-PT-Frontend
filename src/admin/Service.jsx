import Sidebar from '../components/dashboard_admin/Sidebar'

export const Service = () => {
	return (
		<div>
			<Sidebar />
			<div
				className="flex-1 text-black p-10 mt-10 bg-white left-0 absolute"
				style={{ marginLeft: '18rem' }} // Adjust this value to match your sidebar width
			>
				<div className="border-solid border-4 border-black p-4 h-[900px] w-[1500px]">
					Servicio
				</div>
			</div>
		</div>
	)
}
