import { useState } from 'react'
import SearchBar from './SearchBar'
import Cards from './Cards'
import ViewApartmentsDetail from './ViewApartmentDetail'

const ViewApartments = () => {
	const [selectedApartment, setSelectedApartment] = useState(null)

	const handleCardClick = (apartment) => {
		setSelectedApartment(apartment)
	}

	return (
		<section className="p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
			<SearchBar />
			{selectedApartment ? (
				<ViewApartmentsDetail apartment={selectedApartment} />
			) : (
				<Cards onCardClick={handleCardClick} />
			)}
		</section>
	)
}

export default ViewApartments
