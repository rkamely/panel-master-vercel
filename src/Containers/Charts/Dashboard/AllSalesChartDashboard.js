import React, {useEffect, useState} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

function AllSalesChartDashboard({data}) {
//OK


    useEffect(() => {

        /* Chart code */
// Themes begin
        am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
        let chart = am4core.create("allSalesChartDashboard", am4charts.PieChart);
        chart.responsive.enabled = true;

// Add data
        chart.data = [
            {
                sales:2001516,
                title:"همراه اول"
            },
            {
                sales:24524242,
                title:"ایرانسل"
            },
            {
                sales:25444252,
                title:"رایتل"
            },
            {
                sales:23452354,
                title:"ستاره"
            }
        ];

// Set inner radius
        chart.innerRadius = am4core.percent(50);

// Add and configure Series
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "sales";
        pieSeries.dataFields.category = "title";
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;
        pieSeries.labels.template.fontSize = 10
        pieSeries.labels.template.minWidth = 20
        pieSeries.alignLabels = false


// This creates initial animation
        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;

        am4core.addLicense("ch-custom-attribution");
        chart.rtl = true;
    }, [data])


    return (

        <>
            <div id="allSalesChartDashboard" style={{width: "100%", height: "420px"}}/>
        </>

    );
}

export default AllSalesChartDashboard;
