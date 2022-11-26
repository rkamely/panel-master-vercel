import React from "react";

import './TitleReport.scss';

function TitleReport(props) {
    return (
        <h1 className="reportTitle">{props.title}</h1>
    );
}

export default TitleReport;
