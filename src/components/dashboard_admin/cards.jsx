import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchApartments } from '../../Redux/features/getApartments/apartmentsSlice'
import { fetchCondominiums } from '../../Redux/features/getCondominium/condominiumSlice'
import ApartmentCard from '../dashboard_admin/card/ApartmentCard'

const Cards = () => {
	const dispatch = useDispatch()
	const selectedCondominium = useSelector(
		(state) => state.condominiums.selectedCondominium
	)
	const apartments = useSelector((state) => state.apartments.apartments)
	const condominiumStatus = useSelector((state) => state.condominiums.status)
	const apartmentStatus = useSelector((state) => state.apartments.status)

	const [filteredApartments, setFilteredApartments] = useState([])

	useEffect(() => {
		if (condominiumStatus === 'idle') {
			dispatch(fetchCondominiums())
		}
	}, [condominiumStatus, dispatch])

	useEffect(() => {
		if (apartmentStatus === 'idle') {
			dispatch(fetchApartments())
		}
	}, [apartmentStatus, dispatch])

	useEffect(() => {
		if (selectedCondominium) {
			const apartmentsForCondominium = apartments.filter(
				(apartment) =>
					apartment.CondominiumId === parseInt(selectedCondominium, 10)
			)
			setFilteredApartments(apartmentsForCondominium)
		}
	}, [selectedCondominium, apartments])

	return (
		<div className="p-4">
			{selectedCondominium && (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					{filteredApartments.length > 0 ? (
						filteredApartments.map((apartment) => (
							<ApartmentCard
								key={apartment.id}
								id={apartment.id}
								numberApartment={apartment.numberApartment}
								size={apartment.size}
								status={apartment.status}
								isActive={apartment.isActive}
								imageUrl={apartment.imageUrl}
								Condominium={apartment.Condominium}
							/>
						))
					) : (
						<p className="text-gray-600 dark:text-gray-400">
							No hay apartamentos disponibles.
						</p>
					)}
				</div>
			)}
		</div>
	)
}

export default Cards
