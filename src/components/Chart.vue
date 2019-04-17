<template>
  <div class="chartElem">
    <div class="row">
      <highcharts class="chart" :options="chartOptions"></highcharts>
    </div>
  </div>
</template>

<script>
import options from "../views/chart-options/options";
export default {
  data() {
    return {
      chartOptions: options.chartOption
    };
  }
};
</script>

<style scoped>
</style>
