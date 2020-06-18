import React from "react";

export type OnOffType = {
  on: boolean
  onChange: (on: boolean) => void
}

const OnOff = (props: OnOffType) => {

  const onStyle = {
    display: 'inline-block',
    width: '50px',
    height: '23px',
    border: '1px solid black',
    background: props.on ? 'green' : 'white'
  };
  const offStyle = {
    display: 'inline-block',
    width: '50px',
    height: '23px',
    border: '1px solid black',
    background: !props.on ? 'red' : 'white'
  };
  const indicatorStyle = {
    display: 'inline-block',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    marginLeft: '5px',
    border: '1px solid black',
    background: props.on ? 'green' : 'red'
  };

  return (
    <div>
      <div
        style={ onStyle }
        onClick={ () => { props.onChange( true ); } }>On</div>

      <div
        style={ offStyle }
        onClick={ () => { props.onChange( false ); } }>Off</div>

      <div style={ indicatorStyle }></div>
    </div>
  );
};

export default OnOff;