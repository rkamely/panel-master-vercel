import React, {useEffect, useState} from "react";
import {DatePicker as DatePickerJalali, JalaliLocaleListener} from "antd-jalali";
import ActionBtn from "../../../Components/Buttons/ActionBtn";
import SecondaryBtn from "../../../Components/Buttons/SecondaryBtn";
import {BaseURL} from "../../../Utils/BaseURL";
import dayjs, {locale} from "dayjs";
import ChartTypeHandler from "../../../Utils/ChartTypeHandler";
import ComparativeOperatorsCharge from "./ComparativeOperatorsCharge";
import {useHistory} from "react-router-dom";
import ChartSkeleton from "../ChartSkeleton";


function ComparativeOperatorsCharge_Form({start, end}) {
//ok
    dayjs.calendar('jalali');

    const [comparativeOperatorsChargeData, setComparativeOperatorsChargeData] = useState()
    const [comparativeOperatorsChargeStartDate, setComparativeOperatorsChargeDataStartDate] = useState(start)
    const [comparativeOperatorsChargeEndDate, setComparativeOperatorsChargeEndDate] = useState(end)
    const [comparativeOperatorsChargeType, setComparativeOperatorsChargeType] = useState(2)
    const [comparativeOperatorsChargeLoading, setComparativeOperatorsChargeLoading] = useState(false)




    const formHandler = (e) => {
        e.preventDefault()
    }
    const datePickerHandler = (e) => {
        setComparativeOperatorsChargeDataStartDate(e[0])
        setComparativeOperatorsChargeEndDate(e[1])
    }

    const checkTypeData = (type) => setComparativeOperatorsChargeType(type)

    return (<>
        {comparativeOperatorsChargeLoading ? <ChartSkeleton/> : <>
            <form className='chartForm' onSubmit={e => formHandler(e)}>
                <JalaliLocaleListener/>
                <DatePickerJalali.RangePicker
                    onChange={e => datePickerHandler(e)}
                    style={{maxWidth: '300px'}}
                    defaultValue={[start, end]}
                />
                <ActionBtn content={'تایید'} color={`#{$PrimaryBtn}`}/>
            </form>
            <ComparativeOperatorsCharge />
            <div className='changeTypeData'>
                <div onClick={() => checkTypeData(2)}>
                    <SecondaryBtn content={'ریالی'}/>
                </div>
                <div onClick={() => checkTypeData(1)}>
                    <SecondaryBtn content={'عددی'}/>
                </div>
            </div>
        </>}
    </>);
}

export default ComparativeOperatorsCharge_Form;
