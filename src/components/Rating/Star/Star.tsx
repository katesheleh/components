import React from 'react';
import {RatingValueType} from '../Rating';

type StarType = {
	selected: boolean
	onClick: (value: RatingValueType) => void
	value: RatingValueType
}

const Star = React.memo((props: StarType) => {
	return (
			<span onClick={() => {
				props.onClick(props.value)
			}}>
      {props.selected ? <b>star </b> : 'star '}
    </span>
	)
})

export default Star;