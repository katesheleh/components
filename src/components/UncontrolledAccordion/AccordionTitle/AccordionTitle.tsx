import React from 'react';

type AccordionTitleType = {
  title: string;
  onClick: () => void;
};

const AccordionTitle = ( props: AccordionTitleType ) => {
  return (
    <>
      <h3 onClick={ () => props.onClick() }>{ props.title }</h3>
    </>
  );
};

export default AccordionTitle;