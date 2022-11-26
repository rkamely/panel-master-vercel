import React, {useEffect} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import dayjs from "dayjs";

function CompareSalesDashboard({data}) {

    dayjs.calendar('jalali');
    useEffect(() => {

        /* Chart code */
// Themes begin
        am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
        let chart = am4core.create("CompareSalesDashboard", am4charts.XYChart);
        chart.responsive.enabled = true;

        if(chart.logo) {
            chart.logo.disabled = true;
        }
        chart.colors.list = [
            am4core.color("#67B7DC"),
            am4core.color("#6771DC"),
            am4core.color("#de6b7b"),
        ];
        chart.dateFormatter.inputDateFormat = "HH:mm:ss Z"
//
//         console.log(new Date(2018, 0, 1, 2))
// Increase contrast by taking evey second color
        chart.colors.step = 1;
// Add data
        chart.data = data;

// Create axes
        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.minGridDistance = 50;
        dateAxis.renderer.grid.template.disabled = true;
        dateAxis.renderer.labels.template.rotation = -45;
        dateAxis.baseInterval = {
            "timeUnit": "hour",
            "count": 1
        }

// Create series
        function createAxisAndSeries(field, name, opposite, bullet) {
            let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.renderer.grid.template.disabled = true;
            valueAxis.renderer.tooltip.disabled = true;
            valueAxis.fontSize = 10;
            valueAxis.renderer.labels.template.disabled = true;


            if (chart.yAxes.indexOf(valueAxis) != 0) {
                valueAxis.syncWithAxis = chart.yAxes.getIndex(0);
            }

            let series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = field;
            series.dataFields.dateX = "hour";
            series.strokeWidth = 3;
            series.yAxis = valueAxis;
            series.name = name;
            series.tooltipText = "{name} : [bold]{valueY}[/]";
            series.tensionX = 0.8;
            series.showOnInit = true;

            let interfaceColors = new am4core.InterfaceColorSet();

            switch (bullet) {
                case "triangle":
                    let bullet = series.bullets.push(new am4charts.Bullet());
                    bullet.width = 12;
                    bullet.height = 12;
                    bullet.horizontalCenter = "middle";
                    bullet.verticalCenter = "middle";

                    let triangle = bullet.createChild(am4core.Triangle);
                    triangle.stroke = interfaceColors.getFor("background");
                    triangle.strokeWidth = 2;
                    triangle.direction = "top";
                    triangle.width = 12;
                    triangle.height = 12;
                    break;
                case "rectangle":
                    let rectangleBullet = series.bullets.push(new am4charts.Bullet());
                    rectangleBullet.width = 10;
                    rectangleBullet.height = 10;
                    rectangleBullet.horizontalCenter = "middle";
                    rectangleBullet.verticalCenter = "middle";
                    let rectangle = rectangleBullet.createChild(am4core.Rectangle);
                    rectangle.stroke = interfaceColors.getFor("background");
                    rectangle.strokeWidth = 1;
                    rectangle.width = 10;
                    rectangle.height = 10;
                    break;
                default:
                    let defaultBullet = series.bullets.push(new am4charts.CircleBullet());
                    defaultBullet.circle.stroke = interfaceColors.getFor("background");
                    defaultBullet.circle.strokeWidth = 1;
                    break;
            }

            valueAxis.renderer.line.strokeOpacity = 1;
            valueAxis.renderer.line.strokeWidth = 2;
            valueAxis.renderer.line.stroke = series.stroke;
            valueAxis.renderer.labels.template.fill = series.stroke;
            valueAxis.renderer.opposite = opposite;
        }

        createAxisAndSeries("value2", "فروش ریالی", false, "circle");
        createAxisAndSeries("value", "فروش تعدادی", true, "rectangle");
        createAxisAndSeries("value3", "خطا ها", true, "triangle ");


// Add legend
        chart.legend = new am4charts.Legend();
        chart.legend.labels.template.minWidth = 100
        chart.legend.labels.template.textAlign = 'middle'


// Add cursor
        chart.cursor = new am4charts.XYCursor();

// generate some random data, quite different range
        function generateChartData() {
            let chartData = [];
            let firstDate = new Date();
            firstDate.setDate(firstDate.getDate() - 100);
            firstDate.setHours(0, 0, 0, 0);

            let value = 1600;
            let value2 = 2900;
            let value3 = 8700;

            for (let i = 0; i < 15; i++) {
                // we create date objects here. In your data, you can have date strings
                // and then set format of your dates using chart.dataDateFormat property,
                // however when possible, use date objects, as this will speed up chart rendering.
                let newDate = new Date(firstDate);

                newDate.setDate(newDate.getDate() + i);

                value += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
                value2 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
                value3 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);

                // date: Fri May 13 2022 00:00:00 GMT+0430 (Iran Daylight Time) {}
                // hits: 2896
                // views: 8694
                // visits: 1606

                chartData.push({
                    hour: newDate,
                    value: value,
                    value2: value2,
                    value3: value3
                })
            }
            return chartData;
        }


        am4core.addLicense("ch-custom-attribution");
        chart.rtl = true;
    }, [])


    return (

        <>
            <div id="CompareSalesDashboard" style={{width: "100%", height: "450px"}}/>
        </>

    );
}

export default CompareSalesDashboard;
