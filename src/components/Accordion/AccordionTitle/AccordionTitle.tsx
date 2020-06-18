import React from 'react';

type AccordionTitleType = {
  title: string;
  onChange: () => void
};

const AccordionTitle = ( props: AccordionTitleType ) => {
  return (
    <>
      <h3 onClick={props.onChange}>-- { props.title } --</h3>
    </>
  );
};

export default AccordionTitle;