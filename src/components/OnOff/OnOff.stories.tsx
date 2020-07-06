import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import OnOff from './OnOff';

export default {
	title: 'OnOff',
	component: OnOff,
};

const callback = action('on or off cliked')

export const OnMode = () => <OnOff on={true} onChange={callback}/>;
export const OffMode = () => <OnOff on={false} onChange={callback}/>
export const ModeChanging = () => {
	const [on, setOn] = useState(false)
	return <OnOff on={on} onChange={setOn}/>
}