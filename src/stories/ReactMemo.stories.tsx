import React, {useState} from 'react';

export default {
	title: 'React.memo demo',
};

const NewMessagesCount = (props: { count: number }) => {
	console.log('NewMessagesCount')
	return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
	console.log('USERS')
	return (
			<div>
				{props.users.map((u, i) => <div key={i}>{u}</div>)}
			</div>
	)
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
	const [count, setCount] = useState(0)
	const [users, setUsers] = useState(['Katia', 'Denis', 'Tatiana'])

	const addUser = () => {
		const newUsers = [...users, 'New Name' + new Date().getTime()]
		setUsers(newUsers)
	}
	return <>
		<button onClick={() => setCount(count + 1)}>+</button>
		<button onClick={addUser}>add user</button>
		<NewMessagesCount count={count}/>
		<Users users={users}/>
	</>
}