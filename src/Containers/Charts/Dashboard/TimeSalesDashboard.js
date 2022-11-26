import React, {useEffect, useState} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

function TimeSalesDashboard() {
    useEffect(() => {
        /* Chart code */
// Themes begin
        am4core.useTheme(am4themes_animated);
// Themes end

        /* Create chart instance */
        let chart = am4core.create("timeSalesDashboard", am4charts.RadarChart);
        chart.responsive.enabled = true;

        let data = [];
        let value2 = 600;
        let value3 = 700;
        let value4 = 800;


        for (let i = 0; i < 24; i++) {
            let date = new Date();
            date.setHours(i, 1);
            value2 -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 50)
            value3 -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 50);
            value4 -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 50);

            data.push({date: date, value2: value2, value3: value3, value4: value4})
        }

        chart.data = data;

        /* Create axes */
        let categoryAxis = chart.xAxes.push(new am4charts.DateAxis());
        categoryAxis.renderer.labels.template.disabled=true

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.extraMin = 0.2;
        valueAxis.extraMax = 0.2;
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.labels.template.disabled=true

        /* Create and configure series */
            let series2 = chart.series.push(new am4charts.RadarSeries());
        series2.dataFields.valueY = "value2";
        series2.dataFields.dateX = "date";
        series2.strokeWidth = 3;
        series2.tooltipText = "{name}:{valueY}";
        series2.name = "همراه اول";
        series2.bullets.create(am4charts.CircleBullet);
        series2.dataItems.template.locations.dateX = 0.5;

        let series3 = chart.series.push(new am4charts.RadarSeries());
        series3.dataFields.valueY = "value3";
        series3.dataFields.dateX = "date";
        series3.strokeWidth = 3;
        series3.tooltipText = "{name}:{valueY}";
        series3.name = "ایرانسل";
        series3.bullets.create(am4charts.CircleBullet);
        series3.dataItems.template.locations.dateX = 0.5;

        let series4 = chart.series.push(new am4charts.RadarSeries());
        series4.dataFields.valueY = "value4";
        series4.dataFields.dateX = "date";
        series4.strokeWidth = 3;
        series4.tooltipText = "{name}:{valueY}";
        series4.name = "رایتل";
        series4.bullets.create(am4charts.CircleBullet);
        series4.dataItems.template.locations.dateX = 0.5;



        chart.cursor = new am4charts.RadarCursor();
        chart.legend = new am4charts.Legend();

        am4core.addLicense("ch-custom-attribution");
        chart.rtl = true;
    }, [])


    return (

        <>
            <div id="timeSalesDashboard" style={{width: "100%", height: "420px"}}/>
        </>

    );
}

export default TimeSalesDashboard;
