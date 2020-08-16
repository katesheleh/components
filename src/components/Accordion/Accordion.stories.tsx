import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import Accordion from './Accordion';

export default {
	title: 'Accordion',
	component: Accordion,
}

let items = [
	{
		title: 'John',
		value: 'John Value Test'
	},
	{
		title: 'Katia',
		value: 'Katia Value Test'
	},
	{
		title: 'FakeName',
		value: 'FakeName Value Test'
	}
]

const callback = action('on Title clicked: accordion mode change event fired')

const setValueOnClick = (value: string) => {
	console.log(`user with id ${value} was clicked`)
}

export const CollapsedMode = () => <Accordion title={'Title'} onChange={callback} collapsed={true}
																							items={items} onClick={setValueOnClick}/>
export const UncollapsedMode = () => <Accordion title={'Menu'} onChange={callback} collapsed={false}
																								items={items} onClick={setValueOnClick}/>
export const ModeChanging = () => {
	const [collapsed, setCollapsed] = useState(true)
	return <Accordion title={'Title'} onChange={() => setCollapsed(!collapsed)} collapsed={collapsed}
										items={items} onClick={setValueOnClick}/>
}