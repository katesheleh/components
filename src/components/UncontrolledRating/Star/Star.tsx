import React from 'react';

type StarType = {
  selected: boolean;
  setValue: () => void;
};

const Star = ( props: StarType ) => {
  return (
    <span onClick={ () => props.setValue() }>
      { props.selected
        ? <b>star  </b>
        : 'star ' }
    </span>
  );
};



export default Star;