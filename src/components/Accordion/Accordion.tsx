import React from 'react';
import AccordionTitle from './AccordionTitle/AccordionTitle';
import AccordionBody from './AccordionBody/AccordionBody';

type AccordionType = {
    title: string;
    collapsed: boolean;
    onChange: () => void;
}

const Accordion = (props: AccordionType) => {
    return (
        <>
            <AccordionTitle
                title={props.title}
                onChange={props.onChange}/>

            {!props.collapsed && < AccordionBody/>}
        </>
    );

};

export default Accordion;