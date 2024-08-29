import Cards from './Cards/Cards'
import SearchBarUs from './SearhBarUs'

const AdminsView = () => {
	return (
		<section>
			<div className="p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
				<SearchBarUs />
				<Cards />
			</div>
		</section>
	)
}

export default AdminsView
