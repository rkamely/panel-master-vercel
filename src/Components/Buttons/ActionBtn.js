import React from "react";

import './ActionBtn.scss';

function ActionBtn({content}) {
    return (
        <button className='primaryBtn' >{content}</button>
    );
}

export default ActionBtn;
