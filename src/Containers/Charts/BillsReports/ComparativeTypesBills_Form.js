import React, {useEffect, useState} from "react";
import {BaseURL} from "../../../Utils/BaseURL";
import dayjs, {locale} from "dayjs";
import ComparativeTypesBills from "./ComparativeTypesBills";
import {useHistory} from "react-router-dom";
import ChartSkeleton from "../ChartSkeleton";


function ComparativeTypesBills_Form() {
//ok
    dayjs.calendar('jalali');

    const [comparativeTypesBillsData, setComparativeTypesBillsData] = useState()
    const [comparativeTypesBillsLoading, setComparativeTypesBillsLoading] = useState(false)





    return (
        <>
            {comparativeTypesBillsLoading ? <ChartSkeleton/> : <ComparativeTypesBills data={comparativeTypesBillsData}/>}
        </>
    );
}

export default ComparativeTypesBills_Form;
