import PropTypes from 'prop-types'

export const ApartmentCard = ({
	id,
	numberApartment,
	size,
	status,
	isActive,
	imageUrl,
	Condominium, // Se agrega el objeto Condominium como prop
}) => {
	return (
		<div
			className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow ${
				!isActive ? 'opacity-50' : ''
			} dark:bg-gray-800 dark:border-gray-700`}
		>
			{imageUrl && (
				<img
					src={imageUrl}
					alt={`Apartamento ${numberApartment}`}
					className="rounded-t-lg w-full"
				/>
			)}
			<div className="p-5">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{numberApartment}
				</h5>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					Tamaño: {size}
				</p>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					Estado: {status || 'No especificado'}
				</p>
				{Condominium && (
					<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
						Condominio: {Condominium.condominium_name}
					</p>
				)}
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					ID: {id}
				</p>
			</div>
		</div>
	)
}

ApartmentCard.propTypes = {
	id: PropTypes.number.isRequired,
	numberApartment: PropTypes.string.isRequired,
	size: PropTypes.string.isRequired,
	status: PropTypes.string,
	isActive: PropTypes.bool.isRequired,
	imageUrl: PropTypes.string,
	Condominium: PropTypes.shape({
		condominium_name: PropTypes.string.isRequired,
	}).isRequired,
}

ApartmentCard.defaultProps = {
	status: 'No especificado',
	imageUrl: null,
}

export default ApartmentCard
