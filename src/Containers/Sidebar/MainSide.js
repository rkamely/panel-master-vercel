import React, {useState,useEffect} from "react";

import ListItem from "./ListItem";
import {BsReceiptCutoff, BsCreditCard2Front} from "react-icons/bs";
import {GoDashboard} from "react-icons/go";
import {ImConnection, ImWarning} from "react-icons/im";
import {TiArrowForwardOutline} from "react-icons/ti";
import {BiDonateHeart} from "react-icons/bi";


import './MainSide.scss';

function MainSide({hamburgerBtn, setHamburgerBtn}) {

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(JSON.parse(localStorage.getItem('sideBar')))
    },[checked])

    const handleChange = () => {
        setChecked(!checked);
        localStorage.setItem("sideBar",JSON.stringify(!checked))

    }
    const hamSideCloserHandler = () => setHamburgerBtn(!hamburgerBtn)

    return (
        <>
            <div className={`${checked ? "Sidebar" : 'hideSidebar'}`}>
                <header className={`${checked ? "headerSidebar" : 'hideHeaderSidebar'}`}>
                    <img src="./img/starOneLogo.png" alt=""/>
                </header>
                <ListItem id={4} link={'/'} checked={checked} icon={<GoDashboard/>} title={""} subMenu={[]}
                          list={"داشبورد"}/>
                <ListItem id={4} link={'/chargeSales'} checked={checked} icon={<BsCreditCard2Front/>} title={""}
                          subMenu={[]} list={"فروش شارژ"}/>
                <ListItem id={4} link={'/internetSales'} checked={checked} icon={<ImConnection/>} title={""} subMenu={[]}
                          list={"فروش اینترنت"}/>
                <ListItem id={4} link={'/errorsReports'} checked={checked} icon={<ImWarning/>} title={""} subMenu={[]}
                          list={"گزارش خطا ها"}/>
                <ListItem id={4} link={'/bills'} checked={checked} icon={<BsReceiptCutoff/>} title={""}
                          subMenu={[]}
                          list={"تراکنش های قبض"}/>
                <ListItem id={4} link={'/donates'} checked={checked} icon={<BiDonateHeart/>} title={""} subMenu={[]}
                          list={"گزارش نیکوکاری"}/>
                <div className={`switch ${checked ? 'switch1' : 'switch2'}`} onClick={handleChange}>
                    <TiArrowForwardOutline/>
                </div>
            </div>

            <div className='hamSidebarContainer'>
                <div className='hamSideCloser' style={{display: `${hamburgerBtn ? "block" : 'none'}`}} onClick={hamSideCloserHandler}/>
                <div className="hamSidebar"
                     style={{display: `${hamburgerBtn ? "block" : 'none'}`}}>
                    <ListItem id={4} link={'/'} checked={true} icon={<GoDashboard/>} title={""} subMenu={[]}
                              list={"داشبورد"}/>
                    <ListItem id={4} link={'/chargeSales'} checked={true} icon={<BsCreditCard2Front/>} title={""}
                              subMenu={[]} list={"فروش شارژ"}/>
                    <ListItem id={4} link={'/internetSales'} checked={true} icon={<ImConnection/>} title={""}
                              subMenu={[]}
                              list={"فروش اینترنت"}/>
                    <ListItem id={4} link={'/errorsReports'} checked={true} icon={<ImWarning/>} title={""} subMenu={[]}
                              list={"گزارش خطا ها"}/>
                    <ListItem id={4} link={'/bills'} checked={true} icon={<BsReceiptCutoff/>} title={""}
                              subMenu={[]}
                              list={"تراکنش های قبض"}/>
                    <ListItem id={4} link={'/donates'} checked={true} icon={<BiDonateHeart/>} title={""}
                              subMenu={[]}
                              list={"گزارش نیکوکاری"}/>
                </div>
            </div>

        </>
    );
}

export default MainSide;
