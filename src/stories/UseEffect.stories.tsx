import React, {useEffect, useState} from 'react';

export default {
	title: 'useEffect demo',
};

export const SimpleExample = () => {
	console.log('SimpleExample')

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

export const SetIntervalExample = () => {
	console.log('SetIntervalExample')

	const [fake, setFake] = useState(1)
	const [counter, setCount] = useState(1)

	useEffect(() => {
		setTimeout(() => {
			console.log('SetTimeout : ' + document.title)
			document.title = counter.toString()
		}, 1000)
	}, [])


	useEffect(() => {
		setInterval(() => {
			console.log('SetInterval' + counter)
			setCount((state) => state + 1)
		}, 1000)
	}, [])

	return <>
		Hello, counter: {counter}, fake: {fake}
		{/*<button onClick={() => setFake(fake + 1)}>fake +</button>*/}
		{/*<button onClick={() => setCount(counter + 1)}>counter +</button>*/}
	</>
}