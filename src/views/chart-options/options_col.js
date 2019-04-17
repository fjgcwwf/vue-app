module.exports = {
    chartOption: {
        chart: {
            backgroundColor: 'rgba(0,0,0,0)',
            // height:340
        },
        title: {
            text: '按分辨率统计量（景）'
        },
        xAxis: {
            categories: [1.0, 1.5, 2.0, 2.3, 2.5]
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            }
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        }, //隐藏导出图片
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    allowOverlap: true // 允许数据标签重叠
                }
            },
            series: {
                cursor: 'pointer',
                events: {
                    click: function (e) {
                        statClick(e);
                    }
                }
            }
        },
        series: [{
                name: '新增量',
                data: [111, 222, 333, 444, 555]
            },
            {
                name: '总量',
                data: [222, 333, 444, 555, 666]
            }
        ]
    }
}