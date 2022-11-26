import React, {useEffect, useState} from "react";
import {DatePicker as DatePickerJalali, JalaliLocaleListener} from "antd-jalali";
import ActionBtn from "../../../Components/Buttons/ActionBtn";
import SecondaryBtn from "../../../Components/Buttons/SecondaryBtn";
import BaseURL from "../../../Utils/BaseURL";
import dayjs from "dayjs";
import ChartTypeHandler from "../../../Utils/ChartTypeHandler";
import DetailsDonatesReports from "./DetailsDonatesReports";


function DetailsDonatesReports_Form({start, end}) {

    dayjs.calendar('jalali');

    const [detailsDonatesData, setDetailsDonatesData] = useState()
    const [detailsDonatesStartDate, setDetailsDonatesStartDate] = useState(start)
    const [detailsDonatesEndDate, setDetailsDonatesEndDate] = useState(end)
    const [detailsDonatesType, setDetailsDonatesType] = useState("monetary")

    const formHandler = (e) => {
        e.preventDefault()
        //     getData()
    }
    const datePickerHandler = (e) => {
        setDetailsDonatesStartDate(`${(e[0].$M) + 1}/${e[0].$D}/${e[0].$y}`)
        setDetailsDonatesEndDate(`${(e[1].$M) + 1}/${e[1].$D}/${e[1].$y}`)
    }


    return (
        <>
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
            <DetailsDonatesReports/>
            <div className='changeTypeData'>
                <div onClick={() => setDetailsDonatesType(ChartTypeHandler('Monetary'))}><SecondaryBtn
                    content={'ریالی'}/></div>
                <div onClick={() => setDetailsDonatesType(ChartTypeHandler('Quantity'))}><SecondaryBtn
                    content={'عددی'}/></div>
            </div>
        </>
    );
}

export default DetailsDonatesReports_Form;
