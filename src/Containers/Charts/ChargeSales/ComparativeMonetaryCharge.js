import React, {useEffect, useState} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

function ComparativeMonetaryCharge({data}) {

    useEffect(() => {

        /* Chart code */
// Themes begin
        am4core.useTheme(am4themes_animated);
// Themes end

// create chart
        let chart = am4core.create("comparativeMonetary", am4charts.TreeMap);
        chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
        chart.data = [{
            name: "همراه اول",
            children: [
                {
                    name: "هزاری",
                    value: 335
                },
                {
                    name: "پنج هزاری",
                    value: 148
                },
                {
                    name: "ده هزاری",
                    value: 126
                },
                {
                    name: "بیست هزاری",
                    value: 26
                },
                {
                    name: "بیشتر",
                    value: 126
                }
            ]
        },
            {
                name: "ایرانسل",
                children: [
                    {
                        name: "هزاری",
                        value: 235
                    },
                    {
                        name: "پنج هزاری",
                        value: 100
                    },
                    {
                        name: "ده هزاری",
                        value: 95
                    },
                    {
                        name: "بیست هزاری",
                        value: 10
                    },
                    {
                        name: "بیشتر",
                        value: 100
                    }
                ]
            },
            {
                name: "رایتل",
                children: [
                    {
                        name: "هزاری",
                        value: 50
                    },
                    {
                        name: "پنج هزاری",
                        value: 30
                    },
                    {
                        name: "ده هزاری",
                        value: 80
                    },
                    {
                        name: "بیست هزاری",
                        value: 5
                    },
                    {
                        name: "بیشتر",
                        value: 60
                    }
                ]
            }];

        chart.colors.step = 2;

// define data fields
        chart.dataFields.value = "value";
        // chart.dataFields.name = "name";
        chart.dataFields.children = "children";

        chart.zoomable = false;
        let bgColor = new am4core.InterfaceColorSet().getFor("background");

// level 0 series template
        let level0SeriesTemplate = chart.seriesTemplates.create("0");
        let level0ColumnTemplate = level0SeriesTemplate.columns.template;

        level0ColumnTemplate.column.cornerRadius(10, 10, 10, 10);
        level0ColumnTemplate.fillOpacity = 0;
        level0ColumnTemplate.strokeWidth = 4;
        level0ColumnTemplate.strokeOpacity = 0;

// level 1 series template
        let level1SeriesTemplate = chart.seriesTemplates.create("1");
        let level1ColumnTemplate = level1SeriesTemplate.columns.template;

        level1SeriesTemplate.tooltip.animationDuration = 0;
        level1SeriesTemplate.strokeOpacity = 1;

        level1ColumnTemplate.column.cornerRadius(10, 10, 10, 10)
        level1ColumnTemplate.fillOpacity = 1;
        level1ColumnTemplate.strokeWidth = 4;
        level1ColumnTemplate.stroke = bgColor;

        let bullet1 = level1SeriesTemplate.bullets.push(new am4charts.LabelBullet());
        bullet1.locationY = 0.5;
        bullet1.locationX = 0.5;
        bullet1.label.text = "{name} : {value}";
        bullet1.label.fill = am4core.color("#ffffff");

        chart.maxLevels = 2;


        chart.legend = new am4charts.Legend();
        chart.legend.position = "bottom";
        chart.legend.labels.template.minWidth = 100
        chart.legend.labels.template.textAlign = 'middle'


        am4core.addLicense("ch-custom-attribution");
        chart.rtl = true;

    }, [])


    return (

        <>
            <div id="comparativeMonetary" style={{width: "100%", height: "400px"}}/>
        </>

    );
}

export default ComparativeMonetaryCharge;
