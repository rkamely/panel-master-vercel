import React, {useEffect, useState} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

function TypesSalesCharge({data}) {
    useEffect(() => {
        /* Chart code */
// Themes begin
        am4core.useTheme(am4themes_animated);

// Themes end

// Create chart instance
        let chart = am4core.create("typesSalesCharge", am4charts.XYChart);


// Add data

        chart.data = [{
            "year": "شش روز قبل",
            "europe": 2.5,
            "namerica": 2.5,
            "asia": 2.1,
            "meast": 0.2,
        }, {
            "year": "پنج روز قبل",
            "europe": 2.6,
            "namerica": 2.7,
            "asia": 2.2,
            "meast": 0.3,
        }, {
            "year": "چهار روز قبل",
            "europe": 2.8,
            "namerica": 2.9,
            "asia": 2.4,
            "meast": 0.3,
        },{
            "year": "سه روز قبل",
            "europe": 2.8,
            "namerica": 2.9,
            "asia": 2.4,
            "meast": 0.3,
        },{
            "year": "دو روز قبل",
            "europe": 2.8,
            "namerica": 2.9,
            "asia": 2.4,
            "meast": 0.3,
        },{
            "year": "یک روز قبل",
            "europe": 2.8,
            "namerica": 2.9,
            "asia": 2.4,
            "meast": 0.3,
        },{
            "year": "امروز",
            "europe": 2.8,
            "namerica": 2.9,
            "asia": 2.4,
            "meast": 0.3,
        }];

// Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "year";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.grid.template.disabled = true;


        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.inside = true;
        valueAxis.renderer.labels.template.disabled = true;
        valueAxis.min = 0;
        valueAxis.renderer.grid.template.disabled = true;

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
            // series.columns.template.width = 100;

            // Add label
            let labelBullet = series.bullets.push(new am4charts.LabelBullet());
            labelBullet.label.text = "{valueY}";
            labelBullet.locationY = 0.5;
            labelBullet.label.hideOversized = false;

            return series;
        }

        createSeries("europe", "عادی");
        createSeries("namerica", "شگفت انگیز");
        createSeries("asia", "دلخواه");
        createSeries("meast", "همراهی");

// Legend
        chart.legend = new am4charts.Legend();
        chart.legend.labels.template.minWidth = 100
        chart.legend.labels.template.textAlign = 'middle'

        am4core.addLicense("ch-custom-attribution");
        chart.rtl = true;

    }, [])


    return (

        <>
            <div id="typesSalesCharge" style={{width: "100%", height: "400px"}}/>
        </>

    );
}

export default TypesSalesCharge;
