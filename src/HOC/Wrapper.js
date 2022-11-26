import React, {useEffect, useState} from "react";
import {Route} from 'react-router-dom';
import Header from "../Containers/Header"
import MainSide from "../Containers/Sidebar/MainSide"
import Footer from "../Containers/Footer";

import './Wrapper.scss';

export default function Wrapper({component: Component, ...rest}) {

    const [hamburgerBtn, setHamburgerBtn] = useState(false)

    return (
        <Route {...rest} render={matchProps => (
            <>
                <main className='MainPage'>
                    <MainSide setHamburgerBtn={setHamburgerBtn} hamburgerBtn={hamburgerBtn}/>
                    <div className="leftMain">
                        <Header hamburgerBtn={hamburgerBtn} setHamburgerBtn={setHamburgerBtn}/>
                        <Component {...matchProps}/>
                    </div>
                </main>
                <Footer/>
            </>

        )}/>
    )
}
