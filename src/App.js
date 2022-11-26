import React from "react";
import {BrowserRouter, Switch} from 'react-router-dom';

import Wrapper from "./HOC/Wrapper";
import Dashboard from "./Pages/Dashboard";
import ChargeSales from "./Pages/ChargeSales";
import InternetSales from "./Pages/InternetSales";
import ErrorsReports from "./Pages/ErrorsReports";
import BillsReports from "./Pages/BillsReports";
import DonatesReports from "./Pages/DonatesReports";
import Login from "./Pages/Login";

import {ConfigProvider} from "antd";
import fa_IR from "antd/lib/locale/fa_IR";

import './App.scss';

function App() {
    return (
        <ConfigProvider locale={fa_IR} direction="rtl">
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Wrapper path='/' exact component={Dashboard}/>
                        <Wrapper path='/chargeSales'  component={ChargeSales}/>
                        <Wrapper path='/internetSales'  component={InternetSales}/>
                        <Wrapper path='/errorsReports'  component={ErrorsReports}/>
                        <Wrapper path='/bills'  component={BillsReports}/>
                        <Wrapper path='/donates'  component={DonatesReports}/>
                        {/*<Login path='/login' />*/}

                    </Switch>
                </BrowserRouter>
            </div>
        </ConfigProvider>

    );
}

export default App;
