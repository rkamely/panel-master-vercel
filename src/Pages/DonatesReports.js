import React, {useEffect, useState} from "react";
import TitleReport from "../Components/TitleReport";
import ComparativeDonatesReport_Form from "../Containers/Charts/Donates/ComparativeDonatesReport_Form";
import DetailsDonatesReports_Form from "../Containers/Charts/Donates/DetailsDonatesReports_Form";

import dayjs from "dayjs";


import 'antd/dist/antd.min.css'
import './DonatesReports.scss';


function DonatesReports() {

    dayjs.calendar('jalali');

    const [startDefaultDate, setStartDefaultDate] = useState(dayjs(new Date() - 2592000000))
    const [endDefaultDate, setEndDefaultDate] = useState(dayjs(new Date()))
    useEffect(()=>{
        setStartDefaultDate(dayjs(new Date() - 2592000000))
        setEndDefaultDate(dayjs(new Date()))
    },[])

    return (
        <div className="donatesReports">
            <TitleReport title={"تراکنش نیکوکاری"}/>
            <div className="donatesReportsGraphs">
                <div className="rightGraph , typesSalesCharge">
                  <ComparativeDonatesReport_Form start={startDefaultDate} end={endDefaultDate}/>
                </div>
                <div className='leftGraph , amountOfTypes '>
                  <DetailsDonatesReports_Form start={startDefaultDate} end={endDefaultDate}/>
                </div>
            </div>
        </div>
    );
}

export default DonatesReports;
