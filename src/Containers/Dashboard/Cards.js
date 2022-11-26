import React, {useState, useEffect} from "react";
import MiniBox from "./MiniBox";
import PriceFormat from "../../Utils/PriceFormat";
import {BaseURL} from "../../Utils/BaseURL";
import {BsReceiptCutoff, BsShop} from "react-icons/bs";
import {ImWarning} from "react-icons/im";
import {BiDonateHeart} from "react-icons/bi";
import CardSkeleton from "./CardSkeleton";
import {useHistory} from "react-router-dom";
import './Cards.scss';


function Cards(props) {

    let navigate = useHistory();
    const [dataCard, setDataCard] = useState([]);
    const [cardLoading, setCardLoading] = useState(false)





    return (
        <div className='box' style={{background: props.background}}>
            <div className="miniBox">
                {cardLoading ? <CardSkeleton/> : <MiniBox icon={<BsShop/>}
                                                          iconColor={"#ffffffbf"}
                                                          mainTitle={'فروش'}
                                                          value={PriceFormat(2045224)}
                                                          unit={' تومان'}
                                                          background={"linear-gradient(to right, #e52d27 , #b31217 )"}/>}
                {cardLoading ? <CardSkeleton/> : <MiniBox icon={<BsReceiptCutoff/>}
                                                          iconColor={"#ffffffbf"}
                                                          mainTitle={'قبوض'}
                                                          value={PriceFormat(15244564)}
                                                          unit={'عدد'}
                                                          background={"linear-gradient(to right, #43b692 , #099773 )"}/>}
                {cardLoading ? <CardSkeleton/> : <MiniBox icon={<ImWarning/>}
                                                          iconColor={"#ffffffbf"}
                                                          mainTitle={'خطاها'}
                                                          value={PriceFormat(312561651)}
                                                          unit={'عدد'}
                                                          background={"linear-gradient(to right, #12b3eb  , #5460f9 )"}/>}
                {cardLoading ? <CardSkeleton/> : <MiniBox icon={<BiDonateHeart/>}
                                                          iconColor={"#ffffffbf"}
                                                          mainTitle={'نیکوکاری'}
                                                          value={PriceFormat(1651561)}
                                                          unit={' تومان'}
                                                          background={"linear-gradient(to right, #ee9539 , #f64c18 )"}/>}
            </div>
        </div>

    );
}

export default Cards;
