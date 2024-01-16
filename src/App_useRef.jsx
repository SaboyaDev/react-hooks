import { useRef, forwardRef } from 'react'

const App = () => {
	const textInputRef = useRef(null)

	const triggerHandler = () => {
		console.log(textInputRef.current.value)
	}

	return (
		<>
			<h1>Form:</h1>
			<InputComponent ref={textInputRef} />
			<button onClick={triggerHandler}>Trigger</button>
		</>
	)
}

const InputComponent = forwardRef((_, ref) => <input type='text' ref={ref} />)

export default App
