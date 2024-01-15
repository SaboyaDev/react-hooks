import { useState, useEffect } from 'react'
import Block from './Block'

const App = () => {
	let [count, setCount] = useState(0)
	let [animal, setAnimal] = useState('Dog')
	let [block, setBlock] = useState(false)

	const addOne = () => setCount(count + 1)
	const minOne = () => setCount(count - 1)
	const setZero = () => setCount(0)

	return (
		<>
			<h3>Count: {count}</h3>
			<button onClick={addOne}>+1</button>
			<button onClick={minOne}>-1</button>
			<button onClick={setZero}>Reset</button>
			<hr />
			<h3>{animal}</h3>
			<button onClick={() => setAnimal('Cat')}>Change animal</button>
			<hr />
			{block ? <Block /> : null}
			<button onClick={() => setBlock(!block)}>Set Block</button>
		</>
	)
}

export default App
