import React, {useState} from "react";

type PropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

const UncontrolledOnOff = (props: PropsType) => {

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false);

    const onStyle = {
        display: 'inline-block',
        width: '50px',
        height: '23px',
        border: '1px solid black',
        background: on ? 'green' : 'white'
    };
    const offStyle = {
        display: 'inline-block',
        width: '50px',
        height: '23px',
        border: '1px solid black',
        background: !on ? 'red' : 'white'
    };
    const indicatorStyle = {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        marginLeft: '5px',
        border: '1px solid black',
        background: on ? 'green' : 'red'
    };

    const onClicked = () => {
        setOn(true);
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false);
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default UncontrolledOnOff;