import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	fetchCondominiums,
	setSelectedCondominium,
} from '../../Redux/features/getCondominium/condominiumSlice'

const SelectCondominium = () => {
	const dispatch = useDispatch()
	const condominiums = useSelector((state) => state.condominiums.condominiums)
	const status = useSelector((state) => state.condominiums.status)

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchCondominiums())
		}
	}, [status, dispatch])

	const handleChange = (e) => {
		dispatch(setSelectedCondominium(e.target.value))
	}

	return (
		<form className="max-w-sm mx-auto">
			<label htmlFor="underline_select" className="sr-only">
				Seleccione condominio
			</label>
			<select
				id="underline_select"
				className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
				onChange={handleChange}
			>
				<option value="" disabled>
					Seleccione un condominio
				</option>
				{condominiums.map((condominium) => (
					<option key={condominium.id} value={condominium.id}>
						{condominium.condominium_name}
					</option>
				))}
			</select>
		</form>
	)
}

export default SelectCondominium
