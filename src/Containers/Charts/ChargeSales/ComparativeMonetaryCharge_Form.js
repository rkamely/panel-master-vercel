import React, {useEffect, useState} from "react";
import {DatePicker as DatePickerJalali, JalaliLocaleListener} from "antd-jalali";
import ActionBtn from "../../../Components/Buttons/ActionBtn";
import {BaseURL} from "../../../Utils/BaseURL";
import dayjs, {locale} from "dayjs";
import ComparativeMonetaryCharge from "./ComparativeMonetaryCharge";
import {useHistory} from "react-router-dom";
import ChartSkeleton from "../ChartSkeleton";


function ComparativeMonetaryCharge_Form({start, end}) {
//ok
    dayjs.calendar('jalali');

    const [comparativeMonetaryChargeData, setComparativeMonetaryChargeData] = useState()
    const [comparativeMonetaryChargeStartDate, setComparativeMonetaryChargeStartDate] = useState(start)
    const [comparativeMonetaryChargeEndDate, setComparativeMonetaryChargeEndDate] = useState(end)
    const [comparativeMonetaryChargeLoading, setComparativeMonetaryChargeLoading] = useState(false)



    const formHandler = (e) => {
        e.preventDefault()
    }
    const datePickerHandler = (e) => {
        setComparativeMonetaryChargeStartDate(e[0])
        setComparativeMonetaryChargeEndDate(e[1])
    }


    return (
        <>
            {comparativeMonetaryChargeLoading ? <ChartSkeleton/> : <>
                <form className='chartForm' onSubmit={e => formHandler(e)}>
                    <JalaliLocaleListener/>
                    <DatePickerJalali.RangePicker
                        onChange={e => datePickerHandler(e)}
                        style={{maxWidth: '300px'}}
                        defaultValue={[start, end]}
                    />
                    <ActionBtn content={'تایید'} color={`#{$PrimaryBtn}`}/>
                </form>
                <ComparativeMonetaryCharge />
            </>}
        </>
    );
}

export default ComparativeMonetaryCharge_Form;
