import React, {useEffect, useState} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

function DetailsErrors() {

    useEffect(() => {

        /* Chart code */
// Themes begin
        am4core.useTheme(am4themes_animated);
// Themes end

// create chart
        let chart = am4core.create("detailsErrors", am4charts.TreeMap);
        chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
        if(chart.logo) {
            chart.logo.disabled = true;
        }
        chart.data = [{
            name: "خطای اپراتور",
            children: [
                {
                    name: "عدم پاسخ سرور",
                    value: 100
                },
                {
                    name: "اختلال",
                    value: 60
                },
                {
                    name: "اتمام شارژ",
                    value: 30
                }
            ]
        },
            {
                name: "خطای کاربر",
                children: [
                    {
                        name: "کارت مسدود است",
                        value: 135
                    },
                    {
                        name: "رمز اشتباه",
                        value: 98
                    },
                    {
                        name: "کارت هدیه",
                        value: 56
                    }
                ]
            },
            {
                name: "خطای بانک",
                children: [
                    {
                        name: "عدم پاسخگویی",
                        value: 335
                    },
                    {
                        name: "مشکل ترمینال",
                        value: 148
                    },
                    {
                        name: "خطای تایم اوت",
                        value: 126
                    },
                    {
                        name: "مشکل سرور",
                        value: 26
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
        bullet1.label.text = "{name}";
        bullet1.label.fill = am4core.color("#ffffff");

        chart.maxLevels = 2;

        chart.legend = new am4charts.Legend();
        chart.legend.labels.template.marginTop = 10
        chart.legend.labels.template.minWidth = 100
        chart.legend.labels.template.textAlign = 'middle'

        am4core.addLicense("ch-custom-attribution");
        chart.rtl = true;

    }, [])


    return (

        <>
            <div id="detailsErrors" style={{width: "100%", height: "500px"}}/>
        </>

    );
}

export default DetailsErrors;
