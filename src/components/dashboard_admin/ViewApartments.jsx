import PropTypes from 'prop-types'
import SearchBar from './SearchBar'
import Cards from './cards'
import CreateApartmentForm from './CreateApartmentForm'

// const ApartmentsView = ({ showCreateForm }) => {
const ApartmentsView = () => {
	return (
		<section className="p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
			<SearchBar />
			<span>Cargando lista</span>
			<Cards />
			{/* {showCreateForm ? <CreateApartmentForm /> : <Cards />} */}
		</section>
	)
}

ApartmentsView.propTypes = {
	showCreateForm: PropTypes.bool.isRequired,
}

export default ApartmentsView
