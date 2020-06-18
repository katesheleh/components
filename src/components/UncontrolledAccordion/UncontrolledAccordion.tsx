import React, {useState} from 'react';
import AccordionTitle from './AccordionTitle/AccordionTitle';
import AccordionBody from './AccordionBody/AccordionBody';

type AccordionType = {
    title: string;
};

const UncontrolledAccordion = (props: AccordionType) => {
    let [collapsed, setCollapsed] = useState(true);

    return (
        <>
            <AccordionTitle title={props.title} onClick={() => setCollapsed(!collapsed)}/>
            {!collapsed && < AccordionBody/>}
        </>
    );

};

export default UncontrolledAccordion;