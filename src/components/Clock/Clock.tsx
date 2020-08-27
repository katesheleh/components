import React, {useEffect, useState} from 'react';

// add '0' for hours/minutes/seconds with value less than 10
const get2DigitsString = (value: number) => value < 10 ? `0${value}` : value


const Clock: React.FC<PropsType> = (props) => {
	const [date, setDate] = useState(new Date())

	useEffect(() => {
		const intervalID = setInterval(() => {
			console.log('TICK')
			setDate(new Date())
		}, 1000)
		// imitate ComponentWillUnmount
		return () => {
			clearInterval(intervalID)
		}
	}, [])

	return (
			<div>
				<span>{get2DigitsString(date.getHours())}</span>
				:
				<span>{get2DigitsString(date.getMinutes())}</span>
				:
				<span>{get2DigitsString(date.getSeconds())}</span>
			</div>
	)
}

export default Clock;


type PropsType = {}