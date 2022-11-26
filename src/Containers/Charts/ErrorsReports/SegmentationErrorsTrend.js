import React, {useEffect} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

function SegmentationErrorsTrend() {

    useEffect(() => {

        /* Chart code */
// Themes begin
        am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
        let chart = am4core.create("segmentationErrorsTrend", am4charts.XYChart);
        if(chart.logo) {
            chart.logo.disabled = true;
        }
// Add data
        chart.data = [{
            "year": "4/31",
            "italy": 1,
            "germany": 5,
            "uk": 3,
            "ir":2
        }, {
            "year": "5/1",
            "italy": 1,
            "germany": 2,
            "uk": 6,
            "ir":2
        }, {
            "year": "5/2",
            "italy": 2,
            "germany": 3,
            "uk": 1,
            "ir":2
        }, {
            "year": "5/3",
            "italy": 3,
            "germany": 4,
            "uk": 1,
            "ir":2
        }, {
            "year": "5/4",
            "italy": 5,
            "germany": 1,
            "uk": 2,
            "ir":2
        }, {
            "year": "5/5",
            "italy": 3,
            "germany": 2,
            "uk": 1,
            "ir":2
        }, {
            "year": "5/6",
            "italy": 1,
            "germany": 2,
            "uk": 3,
            "ir":2
        }, {
            "year": "5/7",
            "italy": 2,
            "germany": 1,
            "uk": 5,
            "ir":2
        }, {
            "year": "5/8",
            "italy": 3,
            "germany": 5,
            "uk": 2,
            "ir":2
        }, {
            "year": "5/9",
            "italy": 4,
            "germany": 3,
            "uk": 6,
            "ir":2
        }, {
            "year": "5/10",
            "italy": 1,
            "germany": 2,
            "uk": 4,
            "ir":2
        }];

// Create category axis
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "year";
        categoryAxis.renderer.opposite = true;

// Create value axis
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.inversed = true;
        valueAxis.title.text = "تعداد خطاها";
        valueAxis.renderer.minLabelPosition = 0.01;

// Create series
        let series1 = chart.series.push(new am4charts.LineSeries());
        series1.dataFields.valueY = "italy";
        series1.dataFields.categoryX = "year";
        series1.name = "کل خطاها";
        series1.bullets.push(new am4charts.CircleBullet());
        series1.tooltipText = "{name} : {valueY}";
        series1.legendSettings.valueText = "{valueY}";
        series1.visible  = false;

        let series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.valueY = "germany";
        series2.dataFields.categoryX = "year";
        series2.name = 'خطا اپراتور';
        series2.bullets.push(new am4charts.CircleBullet());
        series2.tooltipText = "{name} : {valueY}";
        series2.legendSettings.valueText = "{valueY}";

        let series3 = chart.series.push(new am4charts.LineSeries());
        series3.dataFields.valueY = "uk";
        series3.dataFields.categoryX = "year";
        series3.name = 'خطا کاربر';
        series3.bullets.push(new am4charts.CircleBullet());
        series3.tooltipText = "{name} : {valueY}";
        series3.legendSettings.valueText = "{valueY}";

        let series4 = chart.series.push(new am4charts.LineSeries());
        series4.dataFields.valueY = "ir";
        series4.dataFields.categoryX = "year";
        series4.name = 'خطا بانک';
        series4.bullets.push(new am4charts.CircleBullet());
        series4.tooltipText = "{name} : {valueY}";
        series4.legendSettings.valueText = "{valueY}";

// Add chart cursor
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = "zoomY";


        let hs1 = series1.segments.template.states.create("hover")
        hs1.properties.strokeWidth = 5;
        series1.segments.template.strokeWidth = 1;

        let hs2 = series2.segments.template.states.create("hover")
        hs2.properties.strokeWidth = 5;
        series2.segments.template.strokeWidth = 1;

        let hs3 = series3.segments.template.states.create("hover")
        hs3.properties.strokeWidth = 5;
        series3.segments.template.strokeWidth = 1;

        let hs4 = series4.segments.template.states.create("hover")
        hs4.properties.strokeWidth = 5;
        series4.segments.template.strokeWidth = 1;

// Add legend
        chart.legend = new am4charts.Legend();
        chart.legend.labels.template.minWidth = 100
        chart.legend.labels.template.textAlign = 'middle'
        chart.legend.itemContainers.template.events.on("over", function(event){
            let segments = event.target.dataItem.dataContext.segments;
            segments.each(function(segment){
                segment.isHover = true;
            })
        })

        chart.legend.itemContainers.template.events.on("out", function(event){
            let segments = event.target.dataItem.dataContext.segments;
            segments.each(function(segment){
                segment.isHover = false;
            })
        })



        am4core.addLicense("ch-custom-attribution");
        chart.rtl = true;

    }, [])


    return (

        <>
            <div id="segmentationErrorsTrend" style={{width: "100%", height: "500px"}}/>
        </>

    );
}

export default SegmentationErrorsTrend;
