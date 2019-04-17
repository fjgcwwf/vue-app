<template>
  <div class="app-wrapper">
    <el-container>
      <el-container>
        <el-header
          style="text-align: right; font-size: 12px;background: #203670;"
          ><div class="navbar">
            <div class="right-menu">
              <el-menu
                class=""
                mode="horizontal"
                background-color="#203670"
                text-color="#fff"
                active-text-color="#ffd04b"
              >
                <el-menu-item index="1"
                  ><i class="iconfont el-ico-thirdzongshu"></i
                  >综合情况</el-menu-item
                >
                <el-menu-item index="2"
                  ><i class="iconfont el-ico-thirdziyuan"></i
                  >资源目录</el-menu-item
                >
                <el-menu-item index="3"
                  ><i class="iconfont el-ico-thirdshenji"></i
                  >审计项目</el-menu-item
                >
                <el-menu-item index="4"
                  ><i class="iconfont el-ico-thirdyujing"></i
                  >预警分析</el-menu-item
                >
                <el-menu-item index="5"
                  ><i class="iconfont el-ico-thirdwenti"></i
                  >共性问题</el-menu-item
                >
                <el-menu-item index="6"
                  ><i class="iconfont el-ico-thirddianxinganli"></i
                  >典型案例</el-menu-item
                >
              </el-menu>
            </div>
          </div>
        </el-header>
        <el-main>
          <div id="app">
            <Chart
              style="min-width: 800px; min-height: 400px; float:left"
            ></Chart>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Chart from "../components/MapChart.vue";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    Chart
  }
};
</script>

<style lang="scss" scoped>
#app {
  width: 400px;
  height: 400px;
  margin: 40px auto;
}
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.navbar {
  overflow: hidden;
  position: relative;

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
  }
}
</style>
