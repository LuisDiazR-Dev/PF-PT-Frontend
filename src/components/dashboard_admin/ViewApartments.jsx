import SearchBar from './SearchBar'
import Cards from './cards'

const ApartmentsView = () => {
	return (
		<section>
			<div className="p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
				<SearchBar />
				<Cards />
			</div>
		</section>
	)
}

export default ApartmentsView
