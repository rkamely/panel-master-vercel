import React from "react";

import './MiniBox.scss';

function MiniBox(props) {



    return (
        <div className='MiniBox' style={{background: props.background}}>
            <img src="./img/cool-background.svg" alt=""/>
            <div className='mainTitle'>
                <p>{props.mainTitle}</p>
                <div className="icon" style={{color: props.iconColor}}>{props.icon}</div>
            </div>
            <div className="textMiniBox">
                <span>{props.value}</span>
                <h6>{props.unit}</h6>
            </div>
        </div>

    );
}

export default MiniBox;
