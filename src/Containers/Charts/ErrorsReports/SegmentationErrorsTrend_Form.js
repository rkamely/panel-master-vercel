import React, {useEffect, useState} from "react";
import {DatePicker as DatePickerJalali, JalaliLocaleListener} from "antd-jalali";
import ActionBtn from "../../../Components/Buttons/ActionBtn";
import BaseURL from "../../../Utils/BaseURL";
import dayjs from "dayjs";
import SegmentationErrorsTrend from "./SegmentationErrorsTrend";


function SegmentationErrorsTrend_Form({start, end}) {

    dayjs.calendar('jalali');

    const [segmentationErrorsData, setSegmentationErrorsData] = useState()
    const [segmentationErrorsStartDate, setSegmentationErrorsStartDate] = useState(start)
    const [segmentationErrorsEndDate, setSegmentationErrorsEndDate] = useState(end)


    // const getData = async () => {
    //     await fetch(`${BaseURL}/dashboard/sell`)
    //         .then(response => response.json())
    //         .then((data) => setSegmentationErrorsData(data))
    //         .catch((err) => console.log(err.message))
    // }
    //
    // useEffect(() => {
    //     getData()
    // }, [])

    const formHandler = (e) => {
        e.preventDefault()
        //     getData()
    }
    const datePickerHandler = (e) => {
        setSegmentationErrorsStartDate(`${(e[0].$M) + 1}/${e[0].$D}/${e[0].$y}`)
        setSegmentationErrorsEndDate(`${(e[1].$M) + 1}/${e[1].$D}/${e[1].$y}`)
    }


    return (
        <>
            <form className='chartForm' onSubmit={e => formHandler(e)}>
                <JalaliLocaleListener/>
                <DatePickerJalali.RangePicker
                    onChange={e => datePickerHandler(e)}
                    style={{maxWidth: '300px'}}
                    defaultValue={[start, end]}
                />
                <ActionBtn content={'تایید'} color={`#{$PrimaryBtn}`}/>
            </form>
            <SegmentationErrorsTrend/>
        </>
    );
}

export default SegmentationErrorsTrend_Form;