import React, {useEffect, useState} from "react";
import {DatePicker as DatePickerJalali, JalaliLocaleListener} from "antd-jalali";
import ActionBtn from "../../../Components/Buttons/ActionBtn";
import {BaseURL} from "../../../Utils/BaseURL";
import dayjs, {locale} from "dayjs";
import ComparativeMonetaryBills from "./ComparativeMonetaryBills";
import {useHistory} from "react-router-dom";
import ChartSkeleton from "../ChartSkeleton";


function ComparativeMonetaryBills_Form({start, end}) {
//ok
    dayjs.calendar('jalali');

    const [comparativeMonetaryBillsData, setComparativeMonetaryBillsData] = useState()
    const [comparativeMonetaryBillsStartDate, setComparativeMonetaryBillsStartDate] = useState(start)
    const [comparativeMonetaryBillsEndDate, setComparativeMonetaryBillsEndDate] = useState(end)
    const [comparativeMonetaryBillsLoading, setComparativeMonetaryBillsLoading] = useState(false)




    const formHandler = (e) => {
        e.preventDefault()
    }
    const datePickerHandler = (e) => {
        setComparativeMonetaryBillsStartDate(e[0])
        setComparativeMonetaryBillsEndDate(e[1])
    }


    return (
        <>
            {comparativeMonetaryBillsLoading ? <ChartSkeleton/> : <>
                <form className='chartForm' onSubmit={e => formHandler(e)}>
                    <JalaliLocaleListener/>
                    <DatePickerJalali.RangePicker
                        onChange={e => datePickerHandler(e)}
                        style={{maxWidth: '300px'}}
                        defaultValue={[start, end]}
                    />
                    <ActionBtn content={'تایید'} color={`#{$PrimaryBtn}`}/>
                </form>
                <ComparativeMonetaryBills data={comparativeMonetaryBillsData}/>
            </>}
        </>
    );
}

export default ComparativeMonetaryBills_Form;
