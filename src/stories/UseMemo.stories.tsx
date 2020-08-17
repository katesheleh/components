import React, {useMemo, useState} from 'react';

export default {
	title: 'Usememo demo',
}


export const DificultCountingExample = () => {

	const [a, setA] = useState<number>(5)
	const [b, setB] = useState<number>(5)

	let resultA = 1
	let resultB = 1

	resultA = useMemo(() => {
		let tempResultA = 1
		for (let i = 1; i <= a; i++) {
			let fake = 0;
			while (fake < 1000000) {
				fake++
				const fakeValue = Math.random()
			}
			tempResultA = tempResultA * i
		}
		return tempResultA
	}, [a])


	for (let i = 1; i <= b; i++) {
		resultB = resultB * i
	}

	return (
			<>
				<input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
				<input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
				<hr/>
				<div>Result for a: {resultA}</div>
				<div>Result for b: {resultB}</div>
			</>
	)
}


const UsersSecret = (props: { users: Array<string> }) => {
	console.log('UsersSecret')
	return (
			<div>
				{props.users.map((u, i) => <div key={i}>{u}</div>)}
			</div>
	)
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemoExample = () => {
	console.log('HelpsToReactMemoExample')
	const [count, setCount] = useState(0)
	const [users, setUsers] = useState(['Katia', 'Denis', 'Tatiana'])

	const newArray = useMemo(() => {
		return users.filter(u => u.indexOf('a') > -1)
	}, [users])


	const addUser = () => {
		const newUsers = [...users, 'New Name' + new Date().getTime()]
		setUsers(newUsers)
	}

	return <>
		<button onClick={() => setCount(count + 1)}>+</button>
		{count}
		<button onClick={addUser}>add user</button>
		<Users users={newArray}/>
	</>
}