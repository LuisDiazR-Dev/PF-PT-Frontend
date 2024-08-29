import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAdmins } from '../../../Redux/features/tenants/getAdminsUsersSlice'
import { fetchCondominiums } from '../../../Redux/features/getCondominium/condominiumSlice'
import AdminCard from './CardAdmins'

const Cards = () => {
	const dispatch = useDispatch()
	const selectedAdmin = useSelector((state) => state.admin.selectedAdmin)
	const admins = useSelector((state) => state.admin.admins)
	const condominiums = useSelector((state) => state.condominiums.condominiums)
	const [filteredAdmins, setFilteredAdmins] = useState([])

	useEffect(() => {
		if (selectedAdmin === '') {
			dispatch(fetchAdmins())
		}
	}, [selectedAdmin, dispatch])

	useEffect(() => {
		if (condominiums.length === 0) {
			dispatch(fetchCondominiums())
		}
	}, [condominiums, dispatch])

	useEffect(() => {
		if (selectedAdmin) {
			const adminData = admins.find((admin) => admin.id === selectedAdmin)
			const adminCondominium = condominiums.filter(
				(condo) => condo.AdminId === selectedAdmin
			)

			if (adminData) {
				setFilteredAdmins([
					{
						...adminData,
						CondominiumName:
							adminCondominium
								.map((condo) => condo.condominium_name)
								.join(', ') || 'no asignado',
					},
				])
			}
		}
	}, [selectedAdmin, admins, condominiums])

	return (
		<div className="p-4">
			{selectedAdmin && (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					{filteredAdmins.length > 0 ? (
						filteredAdmins.map((admin) => (
							<AdminCard
								key={admin.id}
								id={admin.id}
								username={admin.username}
								email={admin.email}
								registration_date={admin.registration_date}
								isActive={admin.isActive}
								imageUrl={admin.imageUrl}
								SuscriptionId={admin.SuscriptionId}
								CondominiumName={admin.CondominiumName}
							/>
						))
					) : (
						<p className="text-gray-600 dark:text-gray-400">
							No hay administradores disponibles.
						</p>
					)}
				</div>
			)}
		</div>
	)
}

export default Cards
