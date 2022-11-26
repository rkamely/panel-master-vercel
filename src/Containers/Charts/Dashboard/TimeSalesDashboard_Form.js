import React, {useEffect, useState} from "react";
import {DatePicker as DatePickerJalali, JalaliLocaleListener} from "antd-jalali";
import ActionBtn from "../../../Components/Buttons/ActionBtn";
import SecondaryBtn from "../../../Components/Buttons/SecondaryBtn";
import {BaseURL} from "../../../Utils/BaseURL";
import dayjs from "dayjs";
import TimeSalesDashboard from "./TimeSalesDashboard";
import ChartSkeleton from "../ChartSkeleton";
import {useHistory} from "react-router-dom";


function TimeSalesDashboard_Form({end}) {

    //OK

    dayjs.calendar('jalali');

    const [irancellData,setIrancellData]=useState([])
    const [mciData,setMciData]=useState([])
    const [rightelData,setRightelData]=useState([])

    const [timeOperatorEndDate, setTimeOperatorDataEndDate] = useState(end)
    const [timeSalesType, setTimeOperatorDataType] = useState(4)
    const [timeSalesDashboardLoading, setTimeSalesDashboardLoading] = useState(false)






    const formHandler = (e) => {
        e.preventDefault()
    }

    const titleHandler = () => {
        if (timeSalesType === 0) {
            return "تعداد تراکنش اینترنت"
        } else if (timeSalesType === 1) {
            return "تعداد تراکنش شارژ"
        }else if (timeSalesType === 4) {
            return "تعداد تراکنش شارژ و اینترنت"
        }
    }



    return (
        <>
            {
                timeSalesDashboardLoading ? <ChartSkeleton/> : <>
                    <h2 style={{marginTop:10,marginBottom:10,textAlign:"center",fontWeight:'1000',color:'#939393'}}>{titleHandler()}</h2>
                    <form className='chartForm' onSubmit={e => formHandler(e)}>
                        <JalaliLocaleListener/>
                        <DatePickerJalali
                            onChange={e => setTimeOperatorDataEndDate(e)}
                            style={{maxWidth: '300px'}}
                            defaultValue={timeOperatorEndDate}
                        />
                        <ActionBtn content={'تایید'} color={`#{$PrimaryBtn}`}/>
                    </form>
                    <TimeSalesDashboard />
                    <div className='changeTypeData'>
                        <div onClick={() => setTimeOperatorDataType(4)}><SecondaryBtn content={'کل'}/></div>
                        <div onClick={() => setTimeOperatorDataType(1)}><SecondaryBtn content={'شارژ'}/></div>
                        <div onClick={() => setTimeOperatorDataType(0)}><SecondaryBtn content={'اینترنت'}/></div>
                    </div>
                </>
            }

        </>
    );
}

export default TimeSalesDashboard_Form;
