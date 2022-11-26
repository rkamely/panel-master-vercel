import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import dayjs from "dayjs";
import ActionBtn from "../../../Components/Buttons/ActionBtn";
import SecondaryBtn from "../../../Components/Buttons/SecondaryBtn";
import AllSalesChartDashboard from "./AllSalesChartDashboard";
import ChartSkeleton from "../ChartSkeleton";
import {DatePicker as DatePickerJalali, JalaliLocaleListener} from "antd-jalali";
import {BaseURL} from "../../../Utils/BaseURL";


function AllSalesChartDashboard_Form({start, end}) {
    //OK
    //dayjs.calendar('jalali');

    const [allSalesData, setAllSalesData] = useState([])
    const [allSalesStartDate, setAllSalesDataStartDate] = useState(start)
    const [allSalesEndDate, setAllSalesDataEndDate] = useState(end)
    const [allSalesType, setAllSalesDataType] = useState(2)
    const [allSalesChartDashboard_FormLoading, setAllSalesChartDashboard_FormLoading] = useState(false)






    const formHandler = (e) => {
        e.preventDefault()
    }

    const datePickerHandler = (e) => {
        setAllSalesDataStartDate(e[0])
        setAllSalesDataEndDate(e[1])
    }
    const titleHandler = () => {
        if (allSalesType === 2) {
            return "فروش ریالی"
        } else if (allSalesType === 1) {
            return "تعداد تراکنش"
        }
    }
    return (
        <>
            {
                allSalesChartDashboard_FormLoading ? <ChartSkeleton/> : <>
                    <h2 style={{marginTop:10,marginBottom:10,textAlign:"center",fontWeight:'1000',color:'#939393'}}>{titleHandler()}</h2>
                    <form className='chartForm' onSubmit={e => formHandler(e)}>
                        <JalaliLocaleListener/>
                        <DatePickerJalali.RangePicker
                            onChange={e => datePickerHandler(e)}
                            style={{maxWidth: '300px'}}
                            defaultValue={[allSalesStartDate, allSalesEndDate]}
                        />
                        <ActionBtn content={'تایید'} color={`#{$PrimaryBtn}`}/>
                    </form>
                    <AllSalesChartDashboard data={allSalesData}/>
                    <div className='changeTypeData'>
                        <div onClick={() => setAllSalesDataType(2)}><SecondaryBtn content={'ریالی'}/></div>
                        <div onClick={() => setAllSalesDataType(1)}><SecondaryBtn content={'عددی'}/></div>
                    </div>
                </>
            }

        </>
    );
}

export default AllSalesChartDashboard_Form;
