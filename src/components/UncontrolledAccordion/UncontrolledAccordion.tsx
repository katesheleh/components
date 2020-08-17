import React, {useReducer} from 'react';
import AccordionTitle from './AccordionTitle/AccordionTitle';
import AccordionBody from './AccordionBody/AccordionBody';
import {reducer} from './UncontrolledAccordion-reducer';

const UncontrolledAccordion = React.memo((props: AccordionType) => {
	//let [collapsed, setCollapsed] = useState(true)
	let [state, dispatch] = useReducer(reducer, {collapsed: false})

	return (
			<>
				{/*<AccordionTitle title={props.title} onClick={() => setCollapsed(!collapsed)}/>*/}
				<AccordionTitle title={props.title} onClick={() => dispatch({type: 'TOGGLE_COLLAPSED'})}/>
				{state.collapsed && < AccordionBody/>}
			</>
	)
})

export default UncontrolledAccordion;


// Types
type AccordionType = {
	title: string
}

