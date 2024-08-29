import PropTypes from 'prop-types'

export const AdminCard = ({
	id,
	username,
	email,
	registration_date,
	imageUrl,
	isActive,
	SuscriptionId,
	CondominiumName,
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
					alt={`Apartamento ${username}`}
					className="rounded-t-lg w-full"
				/>
			)}
			<div className="p-5">
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					Identificación ID: {id}
				</p>
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{username}
				</h5>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					Mail: {email}
				</p>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					Fecha de Registro: {registration_date}
				</p>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					Suscripción: {SuscriptionId}
				</p>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					Condominios: {CondominiumName}
				</p>
			</div>
		</div>
	)
}

AdminCard.propTypes = {
	id: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	registration_date: PropTypes.string,
	isActive: PropTypes.bool.isRequired,
	imageUrl: PropTypes.string,
	SuscriptionId: PropTypes.number.isRequired,
	CondominiumName: PropTypes.string.isRequired,
}

export default AdminCard
