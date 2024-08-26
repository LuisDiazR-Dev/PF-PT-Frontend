import { useState } from 'react'

const SelectCondominium = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [inputValue, setInputValue] = useState('')

	const options = [
		'Condominio 1',
		'Condominio 2',
		'Condominio 3',
		'Condominio 4',
	]

	const handleOptionClick = (option) => {
		setInputValue(option)
		setIsOpen(false)
	}

	return (
		<div className="relative z-0 mt-2 ">
			<input
				type="text"
				id="default_standard"
				className=" block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
				value={inputValue}
				onClick={() => setIsOpen(!isOpen)}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<label
				htmlFor="default_standard"
				className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
			>
				Seleccione condominio
			</label>

			{isOpen && (
				<ul className="absolute w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 mt-1 rounded-lg shadow-lg max-h-48 overflow-y-auto">
					{options.map((option, index) => (
						<li
							key={index}
							className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
							onClick={() => handleOptionClick(option)}
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default SelectCondominium
