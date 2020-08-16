import React from 'react'
import {ItemType} from '../Accordion';

type AccordionBodyType = {
	items: ItemType[]
	onClick: (value: string) => void
}

const AccordionBody = (props: AccordionBodyType) => {
	return (
			<ul>
				{props.items.map(((item, index) =>
						<li
								key={index}
								onClick={() => {
									props.onClick(item.value);
								}}>{item.title}</li>))}
			</ul>
	);
};

export default AccordionBody;