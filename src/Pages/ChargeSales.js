import React, {useState,useEffect} from "react";
import TitleReport from "../Components/TitleReport";
import dayjs from "dayjs";
import TypesSalesCharge_Form from "../Containers/Charts/ChargeSales/TypesSalesCharge_Form";
import ComparativeOperatorsCharge_Form from "../Containers/Charts/ChargeSales/ComparativeOperatorsCharge_Form";
import ComparativeMonetaryCharge_Form from "../Containers/Charts/ChargeSales/ComparativeMonetaryCharge_Form";

import 'antd/dist/antd.min.css'
import './ChargeSales.scss';



function ChargeSales() {

    dayjs.calendar('jalali');

    const [startDefaultDate, setStartDefaultDate] = useState(dayjs(new Date() - 2592000000))
    const [endDefaultDate, setEndDefaultDate] = useState(dayjs(new Date()))
    useEffect(()=>{
        setStartDefaultDate(dayjs(new Date() - 2592000000))
        setEndDefaultDate(dayjs(new Date()))
    },[])



    return (
        <div className="chargeSales">
            <TitleReport title={"فروش شارژ"}/>
            <div className="chargeSalesGraphs">

                <div className="rightGraph , typesSalesCharge">
                <TypesSalesCharge_Form/>
                </div>

                <div className='leftGraph , amountOfTypes '>
                 <ComparativeOperatorsCharge_Form start={startDefaultDate} end={endDefaultDate}/>
                </div>

                <div className='rightGraph , amountOfTypes '>
                <ComparativeMonetaryCharge_Form start={startDefaultDate} end={endDefaultDate}/>
                </div>

            </div>

        </div>
    );
}

export default ChargeSales;
