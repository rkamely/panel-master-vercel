import React, {useEffect, useState} from "react";
import {DatePicker as DatePickerJalali, JalaliLocaleListener} from "antd-jalali";
import ActionBtn from "../../../Components/Buttons/ActionBtn";
import SecondaryBtn from "../../../Components/Buttons/SecondaryBtn";
import {BaseURL} from "../../../Utils/BaseURL";
import dayjs from "dayjs";
import ComparativeDonatesReport from "./ComparativeDonatesReport";
import {useHistory} from "react-router-dom";
import ChartSkeleton from "../ChartSkeleton";


function ComparativeDonatesReport_Form({start, end}) {

    dayjs.calendar('jalali');

    const [comparativeDonatesData, setComparativeDonatesData] = useState()
    const [comparativeDonatesStartDate, setComparativeDonatesStartDate] = useState(start)
    const [comparativeDonatesEndDate, setComparativeDonatesEndDate] = useState(end)
    const [comparativeDonatesType, setComparativeDonatesType] = useState(2)
    const [comparativeDonatesLoading, setComparativeDonatesLoading] = useState(false)




    const formHandler = (e) => {
        e.preventDefault()
    }
    const datePickerHandler = (e) => {
        setComparativeDonatesStartDate(e[0])
        setComparativeDonatesEndDate(e[1])
    }

    const checkTypeData = (type) => setComparativeDonatesType(type)


    return (
        <>
            {comparativeDonatesLoading ? <ChartSkeleton/> : <>
                <form className='chartForm' onSubmit={e => formHandler(e)}>
                    <JalaliLocaleListener/>
                    <DatePickerJalali.RangePicker
                        placeholder={["تاریخ شروع", "تاریخ پایان"]}
                        onChange={e => datePickerHandler(e)}
                        style={{maxWidth: '300px'}}
                        // locale={locale}
                        defaultValue={[start, end]}
                    />
                    <ActionBtn content={'تایید'} color={`#{$PrimaryBtn}`}/>
                </form>
                <ComparativeDonatesReport data={comparativeDonatesData}/>
                <div className='changeTypeData'>
                    <div onClick={() => checkTypeData(2)}><SecondaryBtn content={'ریالی'}/>
                    </div>
                    <div onClick={() => checkTypeData(1)}><SecondaryBtn content={'عددی'}/></div>
                </div>
            </>}
        </>
    );
}

export default ComparativeDonatesReport_Form;
