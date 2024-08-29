import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	fetchAdmins,
	setSelectedAdmin,
} from '../../Redux/features/tenants/getAdminsUsersSlice'

const SelectedAdminUser = () => {
	const dispatch = useDispatch()
	const admins = useSelector((state) => state.admin.admins)
	const status = useSelector((state) => state.admin.status)

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchAdmins())
		}
	}, [status, dispatch])

	const handleChange = (e) => {
		e.preventDefault()

		dispatch(setSelectedAdmin(e.target.value))
	}

	return (
		<form className="max-w-sm mx-auto">
			<label htmlFor="underline_select" className="sr-only">
				Selecciona Administradores
			</label>
			<select
				id="underline_select"
				className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
				onChange={handleChange}
			>
				<option value="" disabled>
					Administradores
				</option>
				{admins.map((admin) => (
					<option key={admin.id} value={admin.id}>
						{admin.username}
					</option>
				))}
			</select>
		</form>
	)
}

export default SelectedAdminUser
