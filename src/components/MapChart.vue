<template>
  <highcharts :constructor-type="'mapChart'" :options="mapOptions"></highcharts>
</template>

<script>
import shi from "../views/chart-options/shi";
export default {
  data() {
    let that = this;
    return {
      mapOptions: {
        title: {
          text: "2018年地表覆盖情况"
        },
        chart: {
          animation: false // Disable animation, especially for zooming
        },
        colorAxis: {
          dataClasses: [
            {
              from: -1,
              to: 0,
              color: "rgba(74,131,240,0.80)",
              name: "耕地"
            },
            {
              from: 0,
              to: 1,
              color: "rgba(220,71,71,0.80)",
              name: "园林"
            },
            {
              from: 2,
              to: 3,
              name: "林地",
              color: "rgba(148,0,211,0.80)"
            },
            {
              from: 3,
              to: 4,
              name: "荒漠与裸露地表",
              color: "rgba(240,190,50,0.80)"
            },
            {
              from: 4,
              to: 6,
              name: "草地",
              color: "rgba(255,140,0,0.80)"
            },
            {
              from: 5,
              to: 6,
              name: "水域",
              color: "rgba(90,200,90,0.80)"
            }
          ]
        },
        mapNavigation: {
          enabled: false,
          enableMouseWheelZoom: false
        },
        // Limit zoom range
        yAxis: {
          minRange: 1000
        },
        tooltip: {
          useHTML: true
        },
        // Default options for the pies
        plotOptions: {
          mappie: {
            borderColor: "rgba(255,255,255,0.4)",
            borderWidth: 1,
            tooltip: {
              headerFormat: ""
            }
          }
        },
        series: [
          {
            mapData: shi,
            data: [
              // id, city, gd, yl, ld, hm, cd, sy, result
              [
                "fuzhou",
                "福州",
                1729547,
                3318255,
                144467,
                19391,
                101660,
                21313,
                1
              ],
              [
                "putian",
                "莆田",
                416454,
                163387,
                18725,
                115735,
                234301,
                43243,
                -1
              ],
              ["xiamen", "厦门", 551167, 1252401, 16327, 3345, 24240, 4432, 1],
              [
                "quanzhou",
                "泉州",
                380494,
                684782,
                29829,
                9473,
                110578,
                76534,
                1
              ],
              [
                "zhangzhou",
                "漳州",
                8577206,
                4390272,
                467370,
                271047,
                675895,
                71121,
                -1
              ],
              [
                "longyan",
                "龙岩",
                54312,
                1202484,
                144121,
                38437,
                272912,
                1338870,
                5
              ],
              [
                "sanming",
                "三明",
                897572,
                673215,
                48676,
                22841,
                164304,
                43221,
                -1
              ],
              [
                "nanpin",
                "南平",
                235603,
                185127,
                314757,
                6103,
                241590,
                43113,
                2
              ],
              ["ningde", "宁德", 282830, 12723, 4906, 444258, 304717, 95421, 3]
            ],
            name: "States",
            borderColor: "#FFF",
            showInLegend: false,
            joinBy: ["name"],
            keys: ["id", "name", "gd", "yl", "ld", "hm", "cd", "sy", "value"],
            dataLabels: {
              enabled: true,
              format: "{point.name}"
            },
            tooltip: {
              headerFormat: "",
              pointFormatter: function () {
                return (
                  this.gd + this.yl + this.ld + this.hm + this.cd + this.sy
                );
              }
            },
            events: {
              click: function (e) {
                let d = that;
                d.changeTableZq(e.point.name);
                var text =
                  "color " +
                  e.point.color +
                  "<br/>Point&耕地: " +
                  e.point.name +
                  " (" +
                  e.point.gd +
                  ")";
                if (!this.chart.clickLabel) {
                  this.chart.clickLabel = this.chart.renderer
                    .label(text, 0, 250)
                    .css({
                      width: "180px",
                      color: "#fff"
                    })
                    .add();
                } else {
                  this.chart.clickLabel.attr({
                    text: text
                  });
                }
                e.point.color = "rgba(130, 130, 130, 0.5)";
              }
            }
          },
          {
            name: "Connectors",
            type: "mapline",
            color: "rgba(130, 130, 130, 0.5)",
            zIndex: 5,
            showInLegend: false,
            enableMouseTracking: false
          }
        ]
      }
    };
  },
  methods: {
    changeTableZq: function (zq) {
      this.$emit("sendzq", zq);
    }
  }
};
</script>
