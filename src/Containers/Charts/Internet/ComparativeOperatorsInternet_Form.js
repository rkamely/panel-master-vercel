import React, {useEffect, useState} from "react";
import SecondaryBtn from "../../../Components/Buttons/SecondaryBtn";
import {BaseURL} from "../../../Utils/BaseURL";
import dayjs from "dayjs";
import ComparativeOperatorsInternet from "./ComparativeOperatorsInternet";
import {useHistory} from "react-router-dom";
import ChartSkeleton from "../ChartSkeleton";


function ComparativeOperatorsInternet_Form() {
//ok
    dayjs.calendar('jalali');

    const [comparativeOperatorsInternetData, setComparativeOperatorsInternetData] = useState({})
    const [comparativeOperatorsInternetType, setComparativeOperatorsInternetType] = useState(2)
    const [comparativeOperatorsInternetLoading, setComparativeOperatorsInternetLoading] = useState(false)




    const checkTypeData = (type) => setComparativeOperatorsInternetType(type)

    return (
        <>
            {comparativeOperatorsInternetLoading ? <ChartSkeleton/> : <>
                <ComparativeOperatorsInternet />
                <div className='changeTypeData'>
                    <div onClick={() => checkTypeData(2)}><SecondaryBtn content={'ریالی'}/>
                    </div>
                    <div onClick={() => checkTypeData(1)}><SecondaryBtn content={'عددی'}/></div>
                </div>
            </>}
        </>
    );
}

export default ComparativeOperatorsInternet_Form;
