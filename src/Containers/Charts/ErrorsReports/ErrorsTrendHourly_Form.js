import React, {useEffect, useState} from "react";
import {DatePicker as DatePickerJalali, JalaliLocaleListener} from "antd-jalali";
import ActionBtn from "../../../Components/Buttons/ActionBtn";
import {BaseURL} from "../../../Utils/BaseURL";
import dayjs from "dayjs";
import ErrorsTrendHourly from "./ErrorsTrendHourly";
import {useHistory} from "react-router-dom";
import ChartSkeleton from "../ChartSkeleton";


function ErrorsTrendHourly_Form({start, end}) {
//ok
    dayjs.calendar('jalali');

    const [errorsHourlyData, setErrorsHourlyData] = useState()
    const [errorsHourlyStartDate, setErrorsHourlyStartDate] = useState(start)
    const [errorsHourlyEndDate, setErrorsHourlyEndDate] = useState(end)
    const [errorsHourlyLoading, setErrorsHourlyLoading] = useState(false)



    const formHandler = (e) => {
        e.preventDefault()
    }
    const datePickerHandler = (e) => {
        setErrorsHourlyStartDate(e[0])
        setErrorsHourlyEndDate(e[1])
    }


    return (
        <>
            {errorsHourlyLoading ? <ChartSkeleton/> : <>
                <form className='chartForm' onSubmit={e => formHandler(e)}>
                    <JalaliLocaleListener/>
                    <DatePickerJalali
                        onChange={e => datePickerHandler(e)}
                        style={{maxWidth: '300px'}}
                        defaultValue={end}
                    />
                    <ActionBtn content={'تایید'} color={`#{$PrimaryBtn}`}/>
                </form>
                <ErrorsTrendHourly/>
            </>}
        </>
    );
}

export default ErrorsTrendHourly_Form;
