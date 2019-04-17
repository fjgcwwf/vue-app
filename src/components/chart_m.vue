<template>
  <div class="highcharts-container" :id="id" :option="option"></div>
</template>
<script>
import HighCharts from "highcharts";
import HighchartsDrilldown from "highcharts/modules/drilldown";
import cssDark from "highcharts/themes/dark-unica";
HighchartsDrilldown(HighCharts);
cssDark(HighCharts);

export default {
  // 验证类型
  props: {
    id: {
      type: String
    },
    option: {
      type: Object
    }
  },
  mounted() {
    HighCharts.chart(this.id, this.option);
  }
};
</script>
<style lang="scss">
.highcharts-container {
  width: 800px;
  height: 400px;
}
</style>