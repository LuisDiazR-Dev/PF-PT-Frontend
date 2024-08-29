import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createApartment } from '../../Redux/features/getApartments/createApartmensSlice'

export const CreateApartment = () => {
	const [numberApartment, setNumberApartment] = useState('')
	const [size, setSize] = useState('')
	const [status, setStatus] = useState('')
	const [imageUrl, setImageUrl] = useState('')
	const [CondominiumId, setCondominiumId] = useState('')

	const dispatch = useDispatch()
	const apartmentStatus = useSelector((state) => state.createApartment.status)
	const error = useSelector((state) => state.createApartment.error)

	const handleSubmit = async (e) => {
		e.preventDefault()

		const apartmentData = {
			numberApartment,
			size,
			status,
			imageUrl,
			CondominiumId,
		}

		try {
			await dispatch(createApartment(apartmentData)).unwrap()
			setNumberApartment('')
			setSize('')
			setStatus('')
			setCondominiumId('')
			setImageUrl('')
		} catch (error) {
			console.error('Error creating apartment:', error)
		}
	}

	return (
		<div className="max-w-md mx-auto mt-40 p-6 bg-gray-300 shadow-lg rounded-lg">
			<h2 className="text-2xl font-bold mb-6 text-center">Crear Apartamento</h2>
			{apartmentStatus === 'loading' && <p>Loading...</p>}
			{apartmentStatus === 'failed' && <p className="text-red-600">{error}</p>}

			<a href="/dashboard-admin"> x </a>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label htmlFor="numberApartment" className="block text-gray-700">
						Apartment Number:
					</label>
					<input
						type="text"
						id="numberApartment"
						value={numberApartment}
						onChange={(e) => setNumberApartment(e.target.value)}
						required
						className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<div>
					<label htmlFor="size" className="block text-gray-700">
						Size:
					</label>
					<input
						type="text"
						id="size"
						value={size}
						onChange={(e) => setSize(e.target.value)}
						required
						className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<div>
					<label htmlFor="status" className="block text-gray-700">
						Status:
					</label>
					<input
						type="text"
						id="status"
						value={status}
						onChange={(e) => setStatus(e.target.value)}
						required
						className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<div className="flex items-center">
					<label htmlFor="isActive" className="text-gray-700 mr-2">
						Nro. de Condominio
					</label>
					<input
						type="number"
						id="CondominiumId"
						checked={CondominiumId}
						onChange={(e) => setCondominiumId(e.target.value)}
						className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<div>
					<label htmlFor="imageUrl" className="block text-gray-700">
						Image URL:
					</label>
					<input
						type="text"
						id="imageUrl"
						value={imageUrl}
						onChange={(e) => setImageUrl(e.target.value)}
						className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<button
					type="submit"
					className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					Crear Apartamento
				</button>
			</form>
		</div>
	)
}

export default CreateApartment
