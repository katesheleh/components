import React from 'react';

type StarType = {
	selected: boolean
	setValue: () => void
}

const Star = React.memo((props: StarType) => {
	return (
			<span onClick={() => props.setValue()}>
      {props.selected
					? <b>star </b>
					: 'star '}
    </span>
	)
})


export default Star