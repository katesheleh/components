import React from 'react';
import UncontrolledOnOff from './UncontrolledOnOff';
import {action} from '@storybook/addon-actions';

export default {
	title: 'UncontrolledOnOff',
	component: UncontrolledOnOff
};

const callback = action('on or off cliked')

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callback}/>
export const UncontrolledOnOffDemo = () => <UncontrolledOnOff onChange={callback}/>

