import React, {useEffect} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

function CompareOperatorsDashboard({data}) {

    useEffect(() => {

        /* Chart code */
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        let chart = am4core.create('CompareOperatorsDashboard', am4charts.XYChart)
        chart.responsive.enabled = true;

        chart.colors.step = 2;
        // chart.legend = new am4charts.Legend()
        // chart.legend.position = 'bottom'
        // chart.legend.labels.template.minWidth = 100
        // chart.legend.labels.template.textAlign = 'middle'

        let xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
        xAxis.dataFields.category = 'category'
        xAxis.renderer.cellStartLocation = 0.1
        xAxis.renderer.cellEndLocation = 0.9
        xAxis.renderer.grid.template.location = 0;
        xAxis.renderer.grid.template.disabled = true;
        xAxis.renderer.cellStartLocation = 0.3
        xAxis.renderer.cellEndLocation = 0.8
        xAxis.renderer.minGridDistance = 30;

        let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
        yAxis.min = 0;
        yAxis.renderer.grid.template.disabled = true;

        function createSeries(value, name) {

            let series = chart.series.push(new am4charts.ColumnSeries())
            series.dataFields.valueY = "third"
            series.dataFields.categoryX = 'category'
            series.name = name
            series.events.on("hidden", arrangeColumns);
            series.events.on("shown", arrangeColumns);
            series.columns.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;
            series.columns.template.tooltipText = '{valueY}';
            // series.columns.template.tooltipX = am4core.percent(0);
            // series.columns.template.tooltipY = am4core.percent(0);

            let bullet = series.bullets.push(new am4charts.LabelBullet())
            bullet.interactionsEnabled = true
            bullet.dy = 20;
            // bullet.label.text = '{valueY}'
            bullet.label.fill = am4core.color('#FFFFFF')
            bullet.label.rotation = -90;


            return series;
        }

        function arrangeColumns() {
            let series = chart.series.getIndex(0);
            let w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);

            if (series.dataItems.length > 1) {

                let x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
                let x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
                let delta = ((x1 - x0) / chart.series.length) * w;
                if (am4core.isNumber(delta)) {

                    let middle = chart.series.length / 2;

                    let newIndex = 0;
                    chart.series.each(function (series) {
                        if (!series.isHidden && !series.isHiding) {
                            series.dummyData = newIndex;
                            newIndex++;
                        } else {
                            series.dummyData = chart.series.indexOf(series);
                        }
                    })
                    let visibleCount = newIndex;
                    let newMiddle = visibleCount / 2;

                    chart.series.each(function (series) {
                        let trueIndex = chart.series.indexOf(series);
                        let newIndex = series.dummyData;

                        let dx = (newIndex - trueIndex + middle - newMiddle) * delta

                        series.animate({
                            property: "dx",
                            to: dx
                        }, series.interpolationDuration, series.interpolationEasing);
                        series.bulletsContainer.animate({
                            property: "dx",
                            to: dx
                        }, series.interpolationDuration, series.interpolationEasing);
                    })
                }
            }
        }

        chart.data = [
            {
                category: 'همراه اول',
                third: 60,
            },
            {
                category: 'ایرانسل',
                third: 69,

            },
            {
                category: 'رایتل',
                third: 45,
            }
        ]

        createSeries('value', 'فروش');

        am4core.addLicense("ch-custom-attribution");
        chart.rtl = true;

    }, [])
    return (

        <>
            <div id="CompareOperatorsDashboard" style={{width: "100%", height: "420px"}}/>
        </>

    );
}

export default CompareOperatorsDashboard;
