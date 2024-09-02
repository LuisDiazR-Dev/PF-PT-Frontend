import PropTypes from 'prop-types'

const ViewApartmentsDetail = ({ apartment }) => {
	return (
		<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			{apartment.imageUrl && (
				<img
					className="rounded-t-lg"
					src={apartment.imageUrl}
					alt={`Apartment ${apartment.numberApartment}`}
				/>
			)}
			<div className="p-5">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Apartment {apartment.numberApartment}
				</h5>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					Size: {apartment.size} m²
				</p>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					Status: {apartment.status}
				</p>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					Active: {apartment.isActive ? 'Yes' : 'No'}
				</p>
				<a
					href="#"
					className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Update
					<svg
						className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
				</a>
			</div>
		</div>
	)
}

ViewApartmentsDetail.propTypes = {
	apartment: PropTypes.shape({
		numberApartment: PropTypes.string.isRequired,
		size: PropTypes.string.isRequired,
		status: PropTypes.string,
		isActive: PropTypes.bool.isRequired,
		imageUrl: PropTypes.string,
		Condominium: PropTypes.shape({
			condominium_name: PropTypes.string.isRequired,
			id: PropTypes.number.isRequired,
		}).isRequired,
	}).isRequired,
}

export default ViewApartmentsDetail

// import { useParams } from 'react-router-dom'
// import { useSelector } from 'react-redux'

// export const ViewApartmentDetail = () => {
// 	const { id } = useParams()
// 	const apartment = useSelector((state) =>
// 		state.apartments.apartments.find(
// 			(apartment) => apartment.id === parseInt(id)
// 		)
// 	)

// 	if (!apartment) {
// 		return (
// 			<p className="text-gray-600 dark:text-gray-400">
// 				No se encontró información para el apartamento seleccionado.
// 			</p>
// 		)
// 	}

// 	return (
// 		<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
// 			{apartment.imageUrl && (
// 				<img
// 					className="rounded-t-lg"
// 					src={apartment.imageUrl}
// 					alt={`Apartment ${apartment.numberApartment}`}
// 				/>
// 			)}
// 			<div className="p-5">
// 				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
// 					Apartment {apartment.numberApartment}
// 				</h5>
// 				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
// 					Size: {apartment.size} m²
// 				</p>
// 				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
// 					Status: {apartment.status}
// 				</p>
// 				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
// 					Active: {apartment.isActive ? 'Yes' : 'No'}
// 				</p>
// 				<a
// 					href="#"
// 					className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
// 				>
// 					Update
// 					<svg
// 						className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
// 						aria-hidden="true"
// 						xmlns="http://www.w3.org/2000/svg"
// 						fill="none"
// 						viewBox="0 0 14 10"
// 					>
// 						<path
// 							stroke="currentColor"
// 							strokeLinecap="round"
// 							strokeLinejoin="round"
// 							strokeWidth="2"
// 							d="M1 5h12m0 0L9 1m4 4L9 9"
// 						/>
// 					</svg>
// 				</a>
// 			</div>
// 		</div>
// 	)
// }

// export default ViewApartmentDetail
