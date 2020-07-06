import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import Accordion from './Accordion';

export default {
	title: 'Accordion',
	component: Accordion,
};

const callback = action('on Title clicked: accordion mode change event fired')

export const CollapsedMode = () => <Accordion title={'Title'} onChange={callback} collapsed={true}/>
export const UncollapsedMode = () => <Accordion title={'Menu'} onChange={callback} collapsed={false}/>
export const ModeChanging = () => {
	const [collapsed, setCollapsed] = useState(true)
	return <Accordion title={'Title'} onChange={() => setCollapsed(!collapsed)} collapsed={collapsed}/>
}