import { useEffect } from 'react'

const Block = () => {
	useEffect(() => {
		console.log('Block Created')

		return () => console.log('Block Removed')
	})

	return (
		<div
			style={{
				background: 'red',
				color: 'white',
				margin: '10px',
			}}
		>
			I am a block
		</div>
	)
}

export default Block
