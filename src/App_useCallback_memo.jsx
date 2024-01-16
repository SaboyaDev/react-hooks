import { useCallback, useState } from 'react'
import Title from './components/title'
import Count from './components/count'
import CountBtn from './components/countBtn'
import Age from './components/age'
import AgeBtn from './components/ageBtn'

const App = () => {
	const [count, setCount] = useState(0)
	const [age, setAge] = useState(10)

	const handleCount = useCallback(() => {
		setCount(prevCount => prevCount + 1)
	}, [count])

	const handleAge = useCallback(() => {
		setAge(prevAge => prevAge + 1)
	}, [age])

	return (
		<>
			<Title />
			<Count count={count} />
			<CountBtn handleCount={handleCount} />
			<Age age={age} />
			<AgeBtn handleAge={handleAge} />
		</>
	)
}
export default App

// import { useState, useEffect } from 'react'
// import Block from './Block'

// const App = () => {
// 	let [count, setCount] = useState(0)
// 	let [animal, setAnimal] = useState('Dog')
// 	let [block, setBlock] = useState(false)

// 	const addOne = () => setCount(count + 1)
// 	const minOne = () => setCount(count - 1)
// 	const setZero = () => setCount(0)

// 	return (
// 		<>
// 			<h3>Count: {count}</h3>
// 			<button onClick={addOne}>+1</button>
// 			<button onClick={minOne}>-1</button>
// 			<button onClick={setZero}>Reset</button>
// 			<hr />
// 			<h3>{animal}</h3>
// 			<button onClick={() => setAnimal('Cat')}>Change animal</button>
// 			<hr />
// 			{block ? <Block /> : null}
// 			<button onClick={() => setBlock(!block)}>Set Block</button>
// 		</>
// 	)
// }

// export default App
