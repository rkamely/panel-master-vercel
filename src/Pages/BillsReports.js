import React, {useEffect, useState} from "react";
import TitleReport from "../Components/TitleReport";
import dayjs from "dayjs";
import ComparativeMonetaryBills_Form from "../Containers/Charts/BillsReports/ComparativeMonetaryBills_Form";
import ComparativeTypesBills_Form from "../Containers/Charts/BillsReports/ComparativeTypesBills_Form";
import 'antd/dist/antd.min.css'
import './BillsReports.scss';


function BillsReports() {

    dayjs.calendar('jalali');

    const [startDefaultDate, setStartDefaultDate] = useState(dayjs(new Date() - 2592000000))
    const [endDefaultDate, setEndDefaultDate] = useState(dayjs(new Date()))
    useEffect(() => {
        setStartDefaultDate(dayjs(new Date() - 2592000000))
        setEndDefaultDate(dayjs(new Date()))
    }, [])

    return (
        <div className="billsReports">
            <TitleReport title={"تراکنش های قبض"}/>
            <div className="billsReportsGraphs">
                <div className="rightGraph , typesSalesCharge">
                    <ComparativeTypesBills_Form/>
                </div>
                <div className='leftGraph , amountOfTypes '>
                    <ComparativeMonetaryBills_Form start={startDefaultDate} end={endDefaultDate}/>
                </div>
            </div>
        </div>
    );
}

export default BillsReports;
