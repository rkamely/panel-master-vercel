import React, {useState} from "react";
import TitleReport from "../Components/TitleReport";
import {DatePicker as DatePickerJalali, Calendar, JalaliLocaleListener} from "antd-jalali";
import ActionBtn from "../Components/Buttons/ActionBtn";
import dayjs from "dayjs";
import SecondaryBtn from "../Components/Buttons/SecondaryBtn";
import ComparativeOperatorsInternet from "../Containers/Charts/Internet/ComparativeOperatorsInternet";
import ComparativeMonetaryInternet from "../Containers/Charts/Internet/ComparativeMonetaryInternet";

import 'antd/dist/antd.min.css'
import './InternetSales.scss';
import ComparativeOperatorsInternet_Form from "../Containers/Charts/Internet/ComparativeOperatorsInternet_Form";
import ComparativeMonetaryInternet_Form from "../Containers/Charts/Internet/ComparativeMonetaryInternet_Form";
import ComparativeMonetaryCharge from "../Containers/Charts/Internet/ComparativeMonetaryInternet";




function InternetSales() {

    dayjs.calendar('jalali');

    const [startDefaultDate, setStartDefaultDate] = useState(dayjs(new Date() - 2592000000))
    const [endDefaultDate, setEndDefaultDate] = useState(dayjs(new Date()))
    const [startOperatorDate, setStartOperatorDate] = useState(`${(startDefaultDate.$M) + 1}/${startDefaultDate.$D}/${startDefaultDate.$y}`)
    const [endOperatorDate, setEndOperatorDate] = useState(`${(endDefaultDate.$M) + 1}/${endDefaultDate.$D}/${endDefaultDate.$y}`)


    const datePickerOperatorHandler = (e) => {
        setStartOperatorDate(`${(e[0].$M) + 1}/${e[0].$D}/${e[0].$y}`)
        setEndOperatorDate(`${(e[1].$M) + 1}/${e[1].$D}/${e[1].$y}`)
    }

    const formOperatorHandler = (e) => {
        e.preventDefault()
        // fetch data
    }
    const [startSalesDate, setStartSalesDate] = useState(`${(startDefaultDate.$M) + 1}/${startDefaultDate.$D}/${startDefaultDate.$y}`)
    const [endSalesDate, setEndSalesDate] = useState(`${(endDefaultDate.$M) + 1}/${endDefaultDate.$D}/${endDefaultDate.$y}`)
    const datePickerSalesHandler = (e) => {
        setStartSalesDate(`${(e[0].$M) + 1}/${e[0].$D}/${e[0].$y}`)
        setEndSalesDate(`${(e[1].$M) + 1}/${e[1].$D}/${e[1].$y}`)
    }
    const formSalesHandler = (e) => {
        e.preventDefault()
        // fetch data
    }
    const [startAllSalesDate, setStartAllSalesDate] = useState(`${(startDefaultDate.$M) + 1}/${startDefaultDate.$D}/${startDefaultDate.$y}`)
    const [endAllSalesDate, setEndAllSalesDate] = useState(`${(endDefaultDate.$M) + 1}/${endDefaultDate.$D}/${endDefaultDate.$y}`)

    const datePickerAllSalesHandler = (e) => {
        setStartAllSalesDate(`${(e[0].$M) + 1}/${e[0].$D}/${e[0].$y}`)
        setEndAllSalesDate(`${(e[1].$M) + 1}/${e[1].$D}/${e[1].$y}`)
    }
    const formAllSalesHandler = (e) => {
        e.preventDefault()
        // fetch data
    }
    const typeHandler = () => {
    }
    return (
        <div className="internetSales">
            <TitleReport title={"فروش اینترنت"}/>
            <div className="internetSalesGraphs">

                <div className="rightGraph , comparativeOperatorsSales">
                <ComparativeOperatorsInternet_Form/>
                </div>

                <div className='leftGraph , amountOfTypes '>
                 <ComparativeMonetaryInternet_Form start={startDefaultDate} end={endDefaultDate}/>
                </div>



            </div>

        </div>
    );
}

export default InternetSales;
