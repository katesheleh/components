import {action} from '@storybook/addon-actions';
import React, {ChangeEvent, useRef, useState} from 'react';

export default {
	title: 'Input',
};

export const UncontrolledInput = () => <input/>


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
}


export const GetValueOfUncontrolledInputByBtnPress = () => {
	const [value, setValue] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);
	const saveOnClick = () => {
		if(inputRef.current) {
			setValue(inputRef.current.value)
		}
	}

	return (
			<>
				<input ref={inputRef}/>
				<button onClick={saveOnClick}>Save
				</button>
				- actual value: {value}
			</>
	)
}


export const ControlledInput = () => {
	const [parentValue, setParentValue] = useState('')
	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setParentValue(e.currentTarget.value)
	}
	return <input value={parentValue} onChange={onInputChange}/>
}


export const ControlledCheckbox = () => {
	const [parentValue, setParentValue] = useState(false)
	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setParentValue(e.currentTarget.checked)
	}
	return <input type='checkbox' checked={parentValue} onChange={onInputChange}/>
}


export const ControlledSelect = () => {
	const [parentValue, setParentValue] = useState<string | undefined>('1')
	const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setParentValue(e.currentTarget.value)
	}
	return (
			<select value={parentValue} onChange={onSelectChange}>
				<option value={'1'}>Minsk</option>
				<option value={'2'}>Tarragona</option>
				<option value={'3'}>Barcelona</option>
			</select>
	)
}


export const ControlledInputWithFixedValue = () => <input value={'Test value'}/>


