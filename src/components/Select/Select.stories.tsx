import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import Select from './Select';


export default {
	title: 'SelectCities Second Version',
	component: Select,
}

let items = [
	{
		title: 'John',
		value: '1'
	},
	{
		title: 'Katia',
		value: '2'
	},
	{
		title: 'FakeName',
		value: '3'
	}
]


const callback = action('Value changed')

export const WithValue = () => {
	const [value, setValue] = useState<string>('2')
	return (
			<Select items={items} value={value} onChange={setValue}/>
	)
}

export const WithoutValue = () => {
	const [value, setValue] = useState<string | null>(null)
	return (
			<Select items={items} value={value} onChange={setValue}/>
	)
}