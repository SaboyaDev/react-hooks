import { memo } from 'react'

const Count = memo(({ count }) => {
	console.log('2 - Count')

	return (
		<>
			<h3>The count is: {count}</h3>
		</>
	)
})
export default Count
