// ApartmentList.js
import { useEffect, useState } from 'react'
import { ApartmentCard } from './ApartmentCard'
import apartmentService from '../../../service/Service'
import { Link } from 'react-router-dom'

export const ApartmentList = () => {
	const [apartments, setApartments] = useState([])

	useEffect(() => {
		const fetchApartments = async () => {
			try {
				const result = await apartmentService.allApartments()
				setApartments(result)
			} catch (error) {
				console.error('Error fetching apartments:', error)
			}
		}

		fetchApartments()
	}, [])

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			<Link
            to={`/#/${#.id}`}
            >
				{apartments.map((apartment) => (
					<ApartmentCard
						key={apartment.id}
						imageURL={apartment.imageURL}
						numberApartment={apartment.numberApartment}
						status={apartment.status}
					/>
				))}
			</Link>
		</div>
	)
}
