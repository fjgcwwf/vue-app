module.exports = {
    chartOption: {
        chart: {
            type: "column",
            //backgroundColor: 'rgba(0,0,0,0)',
            events: {
                drilldown: function (e) {
                    //alert(e.point.name);
                }
            }
            //height: 230
        },
        title: {
            text: '遥感影像近5年分发数据量'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: '数据量'
            }
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        }, //隐藏导出图片
        plotOptions: {
            series: {
                borderWidth: 0,
                colorByPoint: true,
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            name: '分发数据量',
            data: [{
                name: 2018,
                y: 2654,
                drilldown: 2018
            }, {
                name: 2017,
                y: 3332,
                drilldown: 2017
            }, {
                name: 2016,
                y: 1760,
                drilldown: 2016
            }, {
                name: 2015,
                y: 1354,
                drilldown: 2015
            }, {
                name: 2014,
                y: 1120,
                drilldown: 2014
            }]
        }],
        drilldown: {
            series: [{
                name: "数据量",
                id: 2018,
                data: [
                    ["党政领导机关", 1234],
                    ["环保", 2345],
                    ["测绘地理信息", 2312],
                    ["交通运输", 2345],
                    ["林业", 1234]
                ]
            }, {
                name: "数据量",
                id: 2017,
                data: [
                    ["党政领导机关", 1234],
                    ["环保", 2345],
                    ["测绘地理信息", 2312],
                    ["交通运输", 2345],
                    ["林业", 1234]
                ]
            }, {
                name: "数据量",
                id: 2016,
                data: [
                    ["党政领导机关", 1234],
                    ["环保", 2345],
                    ["测绘地理信息", 2312],
                    ["交通运输", 2345],
                    ["林业", 1234]
                ]
            }, {
                name: "数据量",
                id: 2015,
                data: [
                    ["党政领导机关", 1234],
                    ["环保", 2345],
                    ["测绘地理信息", 2312],
                    ["交通运输", 2345],
                    ["林业", 1234]
                ]
            }, {
                name: "数据量",
                id: 2014,
                data: [
                    ["党政领导机关", 1234],
                    ["环保", 2345],
                    ["测绘地理信息", 2312],
                    ["交通运输", 2345],
                    ["林业", 1234]
                ]
            }]
        }
    }
}