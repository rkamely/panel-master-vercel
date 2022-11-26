import React, {useEffect, useState} from "react";
import SecondaryBtn from "../../../Components/Buttons/SecondaryBtn";
import {BaseURL} from "../../../Utils/BaseURL";
import dayjs from "dayjs";
import ChartTypeHandler from "../../../Utils/ChartTypeHandler";
import {DatePicker as DatePickerJalali, JalaliLocaleListener} from "antd-jalali";
import ActionBtn from "../../../Components/Buttons/ActionBtn";
import ComparativeMonetaryInternet from "./ComparativeMonetaryInternet";
import {useHistory} from "react-router-dom";
import ChartSkeleton from "../ChartSkeleton";


function ComparativeMonetaryInternet_Form({start, end}) {

    dayjs.calendar('jalali');

    const [comparativeMonetaryInternetData, setComparativeMonetaryInternetData] = useState()
    const [comparativeMonetaryInternetStartDate, setComparativeMonetaryStartDate] = useState(start)
    const [comparativeMonetaryInternetEndDate, setComparativeMonetaryEndDate] = useState(end)
    const [comparativeMonetaryInternetType, setComparativeMonetaryInternetType] = useState(2)
    const [comparativeMonetaryInternetLoading, setComparativeMonetaryInternetLoading] = useState(false)

    useEffect(() => {
        // getData();
    }, [comparativeMonetaryInternetData])

    let navigate = useHistory();

    // const getData = async () => {
    //     setComparativeMonetaryInternetLoading(true)
    //     const token = localStorage.getItem("token");
    //     if (token) {
    //         await fetch(`${BaseURL}/internet/operator/week?type=${comparativeMonetaryInternetType}`, {
    //             method: "GET", headers: {
    //                 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`,
    //             },
    //         })
    //             .then(response => response.json())
    //             .then((data) => console.log(data))
    //             // .then((data) => setComparativeMonetaryInternetData(data))
    //             .catch((err) => console.log(err.message))
    //         setComparativeMonetaryInternetLoading(false)
    //
    //     } else {
    //         navigate.push("/login")
    //     }
    //
    // }

    // const getData = async () => {
    //     await fetch(`${BaseURL}/dashboard/sell`)
    //         .then(response => response.json())
    //         .then((data) => setComparativeMonetaryInternetData(data))
    //         .catch((err) => console.log(err.message))
    // }
    //
    // useEffect(() => {
    //     getData()
    // }, [])

    const formHandler = (e) => {
        e.preventDefault()
            // getData()
    }
    const datePickerHandler = (e) => {
        setComparativeMonetaryStartDate(e[0])
        setComparativeMonetaryEndDate(e[1])
    }
    const checkTypeData = (type) => setComparativeMonetaryInternetType(type)


    return (
        <>
            {comparativeMonetaryInternetLoading ? <ChartSkeleton/> : <>

            <form className='chartForm' onSubmit={e => formHandler(e)}>
                <JalaliLocaleListener/>
                <DatePickerJalali.RangePicker
                    onChange={e => datePickerHandler(e)}
                    style={{maxWidth: '300px'}}
                    defaultValue={[start, end]}
                />
                <ActionBtn content={'تایید'} color={`#{$PrimaryBtn}`}/>
            </form>
            <ComparativeMonetaryInternet data={comparativeMonetaryInternetData}/>
            <div className='changeTypeData'>
                <div onClick={() => checkTypeData(2)}>
                    <SecondaryBtn content={'ریالی'}/>
                </div>
                <div onClick={() => checkTypeData(1)}>
                    <SecondaryBtn content={'عددی'}/>
                </div>
            </div>
                </>}
        </>
    );
}

export default ComparativeMonetaryInternet_Form;
