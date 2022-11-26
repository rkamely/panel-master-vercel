import React, {useEffect, useState} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

function ComparativeTypesBills({data}) {

    useEffect(() => {
        /* Chart code */
// Themes begin
        am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
        let chart = am4core.create("comparativeTypesBills", am4charts.XYChart);
        chart.responsive.enabled = true;


// Add data
        chart.data = [{
            "year": "شش روز قبل",
            "europe": 2.5,
            "namerica": 2.5,

        }, {
            "year": "پنج روز قبل",
            "europe": 2.6,
            "namerica": 2.7,

        }, {
            "year": "چهار روز قبل",
            "europe": 2.6,
            "namerica": 2.7,

        }, {
            "year": "سه روز قبل",
            "europe": 2.6,
            "namerica": 2.7,

        }, {
            "year": "دو روز قبل",
            "europe": 2.6,
            "namerica": 2.7,

        }, {
            "year": "یک روز قبل",
            "europe": 2.6,
            "namerica": 2.7,

        }, {
            "year": "امروز",
            "europe": 2.6,
            "namerica": 2.7,

        }];

// Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "year";
        categoryAxis.renderer.grid.template.location = 0;


        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.inside = true;
        valueAxis.renderer.labels.template.disabled = true;
        valueAxis.min = 0;

// Create series
        function createSeries(field, name) {

            // Set up series
            let series = chart.series.push(new am4charts.ColumnSeries());
            series.name = name;
            series.dataFields.valueY = field;
            series.dataFields.categoryX = "year";
            series.sequencedInterpolation = true;

            // Make it stacked
            series.stacked = true;

            // Configure columns
            series.columns.template.width = am4core.percent(60);
            series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";

            // Add label
            let labelBullet = series.bullets.push(new am4charts.LabelBullet());
            labelBullet.label.text = "{valueY}";
            labelBullet.locationY = 0.5;
            labelBullet.label.hideOversized = true;

            return series;
        }

        createSeries("europe", "قبض همراهی");
        createSeries("namerica", "قبض خدماتی");


// Legend
        chart.legend = new am4charts.Legend();
        chart.legend.labels.template.marginTop = 10
        chart.legend.labels.template.minWidth = 50
        chart.legend.labels.template.textAlign = 'middle'
        // chart.legend.labels.template.fontSize = 10
        chart.legend.labels.template.truncate = true;
        chart.legend.itemContainers.template.tooltipText = "{category}";


        am4core.addLicense("ch-custom-attribution");
        chart.rtl = true;

    }, [])


    return (

        <>
            <div id="comparativeTypesBills" style={{width: "100%", height: "400px"}}/>
        </>

    );
}

export default ComparativeTypesBills;
