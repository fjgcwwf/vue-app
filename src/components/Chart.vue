<template>
  <div id="chart" class="chartElem">
    <div class="row">
      <highcharts class="chart" :options="chartOption" :updateArgs="updateArgs"></highcharts>
      <!-- <highcharts class="chart" :options="chartOptionstest" :updateArgs="updateArgs"></highcharts> -->
    </div>
    <div id="chartType">
      <h3>Select chart type:</h3>
      <select v-model="chartType">
        <option>Spline</option>
        <option>AreaSpline</option>
        <option>Line</option>
        <option>Scatter</option>
        <option>Column</option>
        <option>Area</option>
      </select>
      <input type="button" v-model="chartclick" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chartOption: {
      type: Object
    },
    pp: {
      type: Object
    }
  },
  data() {
    let that = this;
    return {
      chartType: "Spline",
      chartclick: "",
      updateArgs: [true, true, { duration: 1000 }],
      chartOptionstest: {
        chart: {
          type: this.chartType
        },
        title: {
          text: "Sin chart"
        },
        plotOptions: {
          series: {
            cursor: "pointer",
            events: {
              click: function (e) {
                var d = that;
                d.click1("Area");
              }
            }
          }
        },
        series: [
          {
            data: [10, 0, 8, 2, 6, 4, 5, 5],
            color: "#6fcd98"
          }
        ]
      }
    };
  },
  watch: {
    chartType(newValue) {
      this.click1(newValue);
    }
  },
  methods: {
    click1(newValue) {
      this.chartOptionstest.chart.type = newValue.toLowerCase();
      this.$emit("sendyear", '2019');
      /* this.chartOptionstest.plotOptions.series.events.click = function (e) {
        alert(e.point.x);
      }; */
    }
  }
};
</script>

<style scoped>
</style>
