import { useSelector, useDispatch } from 'react-redux'
import {
	increment,
	decrement,
	reSet,
} from './Redux/features/counter/Reducer-CounterSlice'
import {
	incrementAsync,
	incrementPar,
} from './Redux/features/counter/Actions-Counter'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const ReduxExampleComponent = () => {
	const count = useSelector((state) => state.counter.value)
	const dispatch = useDispatch()

	return (
		<div>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<span>count is {count}</span>
				<div>
					<hr />
					<button onClick={() => dispatch(increment())}>Mas +</button>
					<button onClick={() => dispatch(decrement())}>Menos -</button>
					<button onClick={() => dispatch(reSet())}>Reset</button>
					<button onClick={() => dispatch(incrementAsync(5))}>
						Incrementar en 5 después de 1 segundo
					</button>
					<button onClick={() => dispatch(incrementPar(count))}>
						aumentar si es par
					</button>
				</div>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
		</div>
	)
}

export default ReduxExampleComponent
