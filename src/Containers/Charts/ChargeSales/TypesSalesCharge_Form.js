import React, {useEffect, useState} from "react";
import SecondaryBtn from "../../../Components/Buttons/SecondaryBtn";
import {BaseURL} from "../../../Utils/BaseURL";
import dayjs from "dayjs";
import TypesSalesCharge from "./TypesSalesCharge";
import {useHistory} from "react-router-dom";
import ChartSkeleton from "../ChartSkeleton";

function TypesSalesCharge_Form() {
    //ok


    dayjs.calendar('jalali');

    const [typesSalesChargeData, setTypesSalesChargeData] = useState({})
    const [typesSalesChargeType, setTypesSalesChargeType] = useState(2)
    const [typesSalesChargeLoading, setTypesSalesChargeLoading] = useState(false)




    const checkTypeData = (type) => setTypesSalesChargeType(type)

    return (
        <>
            {typesSalesChargeLoading ? <ChartSkeleton/> : <>
                <TypesSalesCharge/>
                <div className='changeTypeData'>
                    <div onClick={() => checkTypeData(2)}><SecondaryBtn content={'ریالی'}/>
                    </div>
                    <div onClick={() => checkTypeData(1)}><SecondaryBtn content={'عددی'}/></div>
                </div>
            </>
            }

        </>
    );
}

export default TypesSalesCharge_Form;
