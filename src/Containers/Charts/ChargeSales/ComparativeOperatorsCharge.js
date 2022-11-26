import React, {useEffect, useState} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

function ComparativeOperatorsCharge({data}) {

    useEffect(() => {

        /* Chart code */
// Themes begin
        am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
        let chart = am4core.create("comparativeOperatorsSales", am4charts.XYChart);
        chart.colors.list = [
            am4core.color("#78e3ff"),
            am4core.color("#78a3ff"),
            am4core.color("#aa78ff"),
            am4core.color("#e278ff"),

        ];
// Add data
        chart.data = [{
            "year": "رایتل",
            "europe": 2.5,
            "namerica": 2.5,
            "asia": 2.1,
            'america':3,
        }, {
            "year": "ایرانسل",
            "europe": 2.6,
            "namerica": 2.7,
            "asia": 2.2,
            'america':3,
        }, {
            "year": "همراه اول",
            "europe": 2.8,
            "namerica": 2.9,
            "asia": 2.4,
            'america':3,
        }];

        chart.legend = new am4charts.Legend();
        chart.legend.position = "bottom";
        chart.legend.labels.template.minWidth = 100
        chart.legend.labels.template.textAlign = 'middle'
// Create axes
        let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "year";
        categoryAxis.renderer.grid.template.opacity = 0;
        categoryAxis.renderer.fontSize = 10;

        categoryAxis.fill = am4core.color("red").lighten(0.5);

        let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;
        valueAxis.renderer.grid.template.opacity = 0;
        valueAxis.renderer.ticks.template.strokeOpacity = 0.5;
        valueAxis.renderer.ticks.template.stroke = am4core.color("#495C43");
        valueAxis.renderer.ticks.template.length = 10;
        valueAxis.renderer.line.strokeOpacity = 0.5;
        valueAxis.renderer.baseGrid.disabled = true;
        valueAxis.renderer.minGridDistance = 40;
        valueAxis.renderer.fontSize = 12;


// Create series
        function createSeries(field, name) {
            let series = chart.series.push(new am4charts.ColumnSeries());
            series.dataFields.valueX = field;
            series.dataFields.categoryY = "year";
            series.stacked = true;
            series.name = name;
            series.columns.template.height = 80;

            let labelBullet = series.bullets.push(new am4charts.LabelBullet());
            labelBullet.locationX = 0.5;
            labelBullet.label.text = "{valueX}";
            labelBullet.label.fill = am4core.color("#fff");
        }

        createSeries("europe", "مستقیم");
        createSeries("namerica", "شگفت انگیز");
        createSeries("asia", "همراهی");
        createSeries("america", "دلخواه");




        am4core.addLicense("ch-custom-attribution");
        chart.rtl = true;

    }, [])


    return (

        <>
            <div id="comparativeOperatorsSales" style={{width: "100%", height: "400px"}}/>
        </>

    );
}

export default ComparativeOperatorsCharge;
