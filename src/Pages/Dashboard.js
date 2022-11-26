import React, {useEffect, useState} from "react";
import TitleReport from "../Components/TitleReport";
import Cards from "../Containers/Dashboard/Cards";
import CompareSalesDashboard_Form from "../Containers/Charts/Dashboard/CompareSalesDashboard_Form";
import CompareOperatorsDashboard_Form from "../Containers/Charts/Dashboard/CompareOperatorsDashboard_Form";
import TimeSalesDashboard_Form from "../Containers/Charts/Dashboard/TimeSalesDashboard_Form";
import AllSalesChartDashboard_Form from "../Containers/Charts/Dashboard/AllSalesChartDashboard_Form";
import dayjs from "dayjs";
import 'antd/dist/antd.min.css'
import './Dashboard.scss';



function Dashboard() {
    // internet:0
    // charge:1
    // ghabz:2
    // internet&charge:4

    // await fetch(`${BaseURL}/dashboard/sale/chart/1?date={1401/07/12}&type={4,1,0}`,
    // await fetch(`${BaseURL}/dashboard/sale/chart/2?fromDate={}&toDate={}&type={1=addadi,2=riali}`,
    // await fetch(`${BaseURL}/dashboard/sale/chart/operator/hour?date=&type=0,1,2,4`,
    // await fetch(`${BaseURL}/dashboard/sale/chart/operator?fromDate=&toDate&type={1=addadi,2=riali}`,

    dayjs.calendar('jalali');

    const [startDefaultDate, setStartDefaultDate] = useState(dayjs(new Date() - 2592000000))
    const [endDefaultDate, setEndDefaultDate] = useState(dayjs(new Date()))
    useEffect(()=>{
        setStartDefaultDate(dayjs(new Date() - 2592000000))
        setEndDefaultDate(dayjs(new Date()))
    },[])
    return (
        <div className="Reports">
            <TitleReport title={"داشبورد"}/>
            <Cards/>
            <div className="graphs">
                <div className='leftGraph'>
                    <CompareSalesDashboard_Form start={startDefaultDate} end={endDefaultDate}/>
                </div>
                <div className="rightGraph">
                    <CompareOperatorsDashboard_Form start={startDefaultDate} end={endDefaultDate}/>
                </div>
                <div className="rightGraph">
                  <TimeSalesDashboard_Form start={startDefaultDate} end={endDefaultDate}/>
                </div>
                <div className='rightGraph'>
                  <AllSalesChartDashboard_Form  start={startDefaultDate} end={endDefaultDate}/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
