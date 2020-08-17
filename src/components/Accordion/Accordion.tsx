import React from 'react';
import AccordionTitle from './AccordionTitle/AccordionTitle';
import AccordionBody from './AccordionBody/AccordionBody';

const Accordion = React.memo((props: AccordionType) => {
	return (
			<>
				<AccordionTitle
						title={props.title}
						onChange={() => props.onChange()}/>

				{!props.collapsed && < AccordionBody items={props.items} onClick={props.onClick}/>}
			</>
	)
})

export default Accordion

// types
type AccordionType = {
	title: string
	collapsed: boolean
	onChange: () => void
	items: ItemType[]
	onClick: (value: string) => void
}

export type ItemType = {
	title: string
	value: string
}