import React, {useState} from 'react';

export default {
	title: 'useState demo',
};

function generateData() {
	// difficult counting
	console.log('GenerateData')
	return 23489735098;
}


export const Example1 = () => {
	console.log('Example1')

	const [count, setCount] = useState(generateData())

	const changer = (state: number) => {
		return state + 1
	}

	return <>
		<button onClick={() => setCount(changer)}>+</button>
		{count}

	</>
}