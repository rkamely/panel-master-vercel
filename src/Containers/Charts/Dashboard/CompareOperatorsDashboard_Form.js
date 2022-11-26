import React, {useEffect, useState} from "react";
import {DatePicker as DatePickerJalali, JalaliLocaleListener} from "antd-jalali";
import ActionBtn from "../../../Components/Buttons/ActionBtn";
import SecondaryBtn from "../../../Components/Buttons/SecondaryBtn";
import {BaseURL} from "../../../Utils/BaseURL";
import dayjs from "dayjs";
import CompareOperatorsDashboard from "./CompareOperatorsDashboard";
import ChartSkeleton from "../ChartSkeleton";
import {useHistory} from "react-router-dom";


function CompareSalesDashboard_Form({start, end}) {

    //OK

    dayjs.calendar('jalali');

    const [compareOperatorData, setCompareOperatorData] = useState()
    const [compareOperatorStartDate, setCompareOperatorDataStartDate] = useState(start)
    const [compareOperatorEndDate, setCompareOperatorDataEndDate] = useState(end)
    const [compareSalesType, setCompareOperatorDataType] = useState(2)
    const [compareSalesDashboardLoading, setCompareSalesDashboardLoading] = useState(false)





    const formHandler = (e) => {
        e.preventDefault()
    }
    const datePickerHandler = (e) => {
        setCompareOperatorDataStartDate(e[0])
        setCompareOperatorDataEndDate(e[1])
    }

    // const prepareDataHandler = (data) => {
    //     setCompareOperatorData([])
    //     let item
    //     for (item in data) {
    //         setCompareOperatorData(prevState => {
    //             return [
    //                 ...prevState,
    //                 {
    //                     'category': item,
    //                     'sales': data[item],
    //                 }
    //             ]
    //         })
    //     }
    // }

    const titleHandler = () => {
        if (compareSalesType === 2) {
            return "فروش ریالی شارژ و اینترنت"
        } else if (compareSalesType === 1) {
            return "تعداد تراکنش شارژ و اینترنت"
        }
    }

    return (


        <>
            {
                compareSalesDashboardLoading ? <ChartSkeleton/> :
                    <>
                        <h2 style={{marginTop:10,marginBottom:10,textAlign:"center",fontWeight:'1000',color:'#939393'}}>{titleHandler()}</h2>
                        <form className='chartForm' onSubmit={e => formHandler(e)}>
                            <JalaliLocaleListener/>
                            <DatePickerJalali.RangePicker
                                onChange={e => datePickerHandler(e)}
                                style={{maxWidth: '300px'}}
                                defaultValue={[compareOperatorStartDate,compareOperatorEndDate]}
                            />
                            <ActionBtn content={'تایید'} color={`#{$PrimaryBtn}`}/>
                        </form>
                        <CompareOperatorsDashboard data={compareOperatorData}/>
                        <div className='changeTypeData'>
                            <div onClick={() => setCompareOperatorDataType(2)}><SecondaryBtn content={'ریالی'}/></div>
                            <div onClick={() => setCompareOperatorDataType(1)}><SecondaryBtn content={'عددی'}/></div>
                        </div>
                    </>
            }


        </>
    );
}

export default CompareSalesDashboard_Form;
