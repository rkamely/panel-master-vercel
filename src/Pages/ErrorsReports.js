import React, {useEffect, useState} from "react";
import TitleReport from "../Components/TitleReport";
import dayjs from "dayjs";
import SegmentationErrorsTrend_Form from "../Containers/Charts/ErrorsReports/SegmentationErrorsTrend_Form";
import ErrorsTrendHourly_Form from "../Containers/Charts/ErrorsReports/ErrorsTrendHourly_Form";
import DetailsErrors_Form from "../Containers/Charts/ErrorsReports/DetailsErrors_Form";

import 'antd/dist/antd.min.css'
import './ErrorsReports.scss';


function ErrorsReports() {

    dayjs.calendar('jalali');

    const [startDefaultDate, setStartDefaultDate] = useState(dayjs(new Date() - 2592000000))
    const [endDefaultDate, setEndDefaultDate] = useState(dayjs(new Date()))
    useEffect(() => {
        setStartDefaultDate(dayjs(new Date() - 2592000000))
        setEndDefaultDate(dayjs(new Date()))
    }, [])

    return (
        <div className="errorsReports">
            <TitleReport title={"گزارش خطا ها"}/>
            <div className="errorsReportsGraphs">
                <div className="rightGraph , typesSalesCharge">
                    <SegmentationErrorsTrend_Form start={startDefaultDate} end={endDefaultDate}/>
                </div>
                <div className='leftGraph , amountOfTypes '>
                    <ErrorsTrendHourly_Form start={startDefaultDate} end={endDefaultDate}/>
                </div>
                <div className='rightGraph , amountOfTypes '>
                    <DetailsErrors_Form start={startDefaultDate} end={endDefaultDate}/>
                </div>

            </div>

        </div>
    );
}

export default ErrorsReports;
