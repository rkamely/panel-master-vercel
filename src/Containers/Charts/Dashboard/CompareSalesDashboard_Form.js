import React, {useEffect, useState} from "react";
import {DatePicker as DatePickerJalali, JalaliLocaleListener} from "antd-jalali";
import ActionBtn from "../../../Components/Buttons/ActionBtn";
import CompareSalesDashboard from "./CompareSalesDashboard";
import SecondaryBtn from "../../../Components/Buttons/SecondaryBtn";
import dayjs from "dayjs";
import {BaseURL} from "../../../Utils/BaseURL";
import ChartSkeleton from "../ChartSkeleton";
import {useHistory} from "react-router-dom";

function CompareSalesDashboard_Form({end}) {

    //ok


    dayjs.calendar('jalali');

    const [compareSalesEndDate, setCompareSalesDataEndDate] = useState(end)
    const [compareSalesDashboardLoading, setCompareSalesDashboardLoading] = useState(false)
    const [typeOfData, setTypeOfData] = useState(4)
    const [salesCounts, setSalesCounts] = useState([])
    const [salesAmount, setSalesAmount] = useState([])
    const [salesErrors, setSalesErrors] = useState([])



    let numberOfSale = [
        {hour: '00', value: 1514},
        {hour: '01', value: 1038},
        {hour: '02', value: 646},
        {hour: '03', value: 344}
    ]
    let number = numberOfSale

    let riyalSale = [
        {hour: '00', value: 1232},
        {hour: '01', value: 321},
        {hour: '02', value: 222},
        {hour: '03', value: 111}
    ]
    let riyal = riyalSale.map(({hour, value: value2}) => ({
        hour,
        value2,
    }));
    let
        saleErrors = [
            {hour: '00', value: 5535},
            {hour: '01', value: 23213},
            {hour: '02', value: 34753},
            {hour: '03', value: 83267}
        ]
    let errors = saleErrors.map(({hour, value: value3}) => ({
        hour,
        value3,
    }));

    let
        all = [
            {hour: '01', value: 1514, errors: 1038, charge: 646},
            {hour: '02', value: 1514, errors: 646, charge: 646},
            {hour: '03', value: 1514, errors: 344, charge: 646}
        ]

    let merge = [...number, ...riyal, ...errors]
    let obj = []
    for (let i = 0; i < 24; i++) {
        let obj2 = {}
        for (let x of merge) {
            if (parseInt(x.hour) === i) {
                Object.assign(obj2, x);
            }
        }
        if (obj2) obj.push(obj2)

    }
    // console.log(compareSalesData)
    // console.log(obj)


    const formHandler = (e) => {
        e.preventDefault()
        // getData()
    }

    const titleHandler = () => {
        if (typeOfData === 0) {
            return "فروش ریالی، تعداد تراکنش و خطای اینترنت"
        } else if (typeOfData === 1) {
            return "فروش ریالی، تعداد تراکنش و خطای شارژ"
        }else if (typeOfData === 4) {
            return "فروش ریالی، تعداد تراکنش و خطای مجموع شارژ و اینترنت"
        }
    }
    return (
        <>
            {
                compareSalesDashboardLoading ? <ChartSkeleton/>
                    : <>
                        <h2 style={{marginTop:10,marginBottom:10,textAlign:"center",fontWeight:'1000',color:'#939393'}}>{titleHandler()}</h2>
                        <form className='chartForm' onSubmit={e => formHandler(e)}>
                            <JalaliLocaleListener/>
                            <DatePickerJalali
                                onChange={e => setCompareSalesDataEndDate(e)}
                                style={{maxWidth: '300px'}}
                                defaultValue={compareSalesEndDate}
                            />
                            <ActionBtn content={'تایید'} color={`#{$PrimaryBtn}`}/>
                        </form>
                        <CompareSalesDashboard data={obj}/>
                        <div className='changeTypeData'>
                            <div onClick={() => setTypeOfData(4)}>
                                <SecondaryBtn content={'کل'}/>
                            </div>
                            <div onClick={() => setTypeOfData(1)}>
                                <SecondaryBtn content={'شارژ'}/>
                            </div>
                            <div onClick={() => setTypeOfData(0)}>
                                <SecondaryBtn content={'اینترنت'}/>
                            </div>
                        </div>
                    </>
            }</>
    );
}

export default CompareSalesDashboard_Form;
