import {action} from '@storybook/addon-actions';
import React, {ChangeEvent, useRef, useState} from 'react';

export default {
	title: 'Input',
};

export const UncontrolledInput = () => <input/>;


export const TrackValueOfUncontrolledInput = () => {
	const [value, setValue] = useState('');
	const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value)
	}
	return (
			<>
				<input onChange={onInputChange}/> - {value}
			</>
	)
};


export const GetValueOfUncontrolledInputByBtnPress = () => {
	const [value, setValue] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);
	const saveOnClick = () => {
		setValue(inputRef.current.value)
	}

	return (
			<>
				<input ref={inputRef}/>
				<button onClick={saveOnClick}>Save
				</button>
				- actual value: {value}
			</>
	)
};


export const ControlledInputWithFixedValue = () => <input value={'Test value'}/>;


