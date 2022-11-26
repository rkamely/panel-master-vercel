import React from "react";
import {RiLogoutBoxRLine,RiNotification2Line} from 'react-icons/ri'
import {BsEnvelope} from 'react-icons/bs'

import './Header.scss';

function Header({setHamburgerBtn,hamburgerBtn}) {
    const hamburgerBtnHandler = () => setHamburgerBtn(!hamburgerBtn)
    return (
        <div className="Header">
            <div className={`${hamburgerBtn ? 'button-open' : "toggle-button"}`} onClick={hamburgerBtnHandler}>
                <div className="wrapper">
                    <div className="menu-bar menu-bar-top"/>
                    <div className="menu-bar menu-bar-middle"/>
                    <div className="menu-bar menu-bar-bottom"/>
                </div>
            </div>
            <div className='leftSideIcons'>
                <BsEnvelope/>
                <RiNotification2Line/>
                <RiLogoutBoxRLine/>
            </div>
        </div>
    );
}

export default Header;
