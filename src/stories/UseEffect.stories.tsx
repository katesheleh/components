import React, {useEffect, useState} from 'react';

export default {
	title: 'useEffect demo',
};

export const Example = () => {
	console.log('Example')

	const [fake, setFake] = useState(1)
	const [counter, setCount] = useState(1)

	useEffect(() => {
		console.log('UseEffect' + document.title)
		document.title = counter.toString()
		//api.getUsers().then()
		//setInterval
		//IndexedDB
		//document.getElementId
		//document.title = 'User'
	}, [counter])

	useEffect(() => {
		console.log('UseEffect on every render')
	})

	useEffect(() => {
		console.log('UseEffect only first render (componentDidMount)')
	}, [])

	useEffect(() => {
		console.log('UseEffect on every counter change')
	}, [counter])

	return <>
		Hello, {counter} {fake}
		<button onClick={() => setFake(fake + 1)}>+</button>
		<button onClick={() => setCount(counter + 1)}>+</button>
	</>
}