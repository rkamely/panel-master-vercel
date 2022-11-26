import React, {useEffect, useState} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

function ComparativeMonetaryBills() {

    useEffect(() => {
        /* Chart code */
// Themes begin
        am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
        let chart = am4core.create("comparativeMonetaryBills", am4charts.XYChart);
        chart.responsive.enabled = true;

// Add data
        chart.data = [{
            "year": "4/30",
            "italy": 1,
        }, {
            "year": "4/31",
            "italy": 1,
        }, {
            "year": "5/1",
            "italy": 2,
        }, {
            "year": "5/2",
            "italy": 3,
        }, {
            "year": "5/3",
            "italy": 5,
        }, {
            "year": "5/4",
            "italy": 3,
        }, {
            "year": "5/5",
            "italy": 1,
        }, {
            "year": "5/6",
            "italy": 2,
        }, {
            "year": "5/7",
            "italy": 3,
        }, {
            "year": "5/8",
            "italy": 4,
        }, {
            "year": "5/9",
            "italy": 1,
        }];

// Create category axis
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "year";
        categoryAxis.renderer.opposite = true;
        categoryAxis.title.text = "مبلغ قبض همراهی";

// Create value axis
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.inversed = true;
        valueAxis.renderer.minLabelPosition = 0;
        valueAxis.renderer.labels.fontSize = 5;


// Create series
        let series1 = chart.series.push(new am4charts.LineSeries());
        series1.dataFields.valueY = "italy";
        series1.dataFields.categoryX = "year";
        series1.name = "زمان فعلی";
        series1.bullets.push(new am4charts.CircleBullet());
        series1.tooltipText = "{name} : {valueY}";
        series1.legendSettings.valueText = "{valueY}";
        series1.visible  = false;

        let series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.valueY = "germany";
        series2.dataFields.categoryX = "year";
        series2.name = 'زمان گذشته';
        series2.bullets.push(new am4charts.CircleBullet());
        series2.tooltipText = "{name} : {valueY}";
        series2.legendSettings.valueText = "{valueY}";


// Add chart cursor
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = "zoomY";


        let hs1 = series1.segments.template.states.create("hover")
        hs1.properties.strokeWidth = 5;
        series1.segments.template.strokeWidth = 1;

        let hs2 = series2.segments.template.states.create("hover")
        hs2.properties.strokeWidth = 5;
        series2.segments.template.strokeWidth = 1;


// Add legend
//         chart.legend = new am4charts.Legend();
//         chart.legend.itemContainers.template.events.on("over", function(event){
//             let segments = event.target.dataItem.dataContext.segments;
//             segments.each(function(segment){
//                 segment.isHover = true;
//             })
//         })
//
//         chart.legend.itemContainers.template.events.on("out", function(event){
//             let segments = event.target.dataItem.dataContext.segments;
//             segments.each(function(segment){
//                 segment.isHover = false;
//             })
//         })


        am4core.addLicense("ch-custom-attribution");
        chart.rtl = true;

    }, [])


    return (

        <>
            <div id="comparativeMonetaryBills" style={{width: "100%", height: "400px"}}/>
        </>

    );
}

export default ComparativeMonetaryBills;
