import React, {useCallback, useMemo, useState} from 'react';

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


// useCallbackExample
type BookSecretPropsType = {
	books: Array<string>
	addBook: () => void
}
const BooksSecret = (props: BookSecretPropsType) => {
	console.log('BooksSecret')
	return (
			<div>
				<button onClick={() => props.addBook()}>add book</button>
				{props.books.map((book, i) => <div key={i}>{book}</div>)}
			</div>
	)
}
const Books = React.memo(BooksSecret)


export const UseCallbackExample = () => {
	console.log('LikeUseCallback')
	const [count, setCount] = useState(0)
	const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

	const newArray = useMemo(() => {
		return books.filter(book => book.indexOf('a') > -1)
	}, [books])


	const memoizedAddBooks = useMemo(() => {
		return () => {
			const newBooks = [...books, 'Angular' + new Date().getTime()]
			setBooks(newBooks)
		}
	}, [books])

	const memoizedAddBooks2 = useCallback(() => {
		const newBooks = [...books, 'Angular' + new Date().getTime()]
		setBooks(newBooks)
	}, [books])

	return <>
		<button onClick={() => setCount(count + 1)}>+</button>
		{count}

		<Books books={newArray} addBook={memoizedAddBooks2}/>
	</>
}