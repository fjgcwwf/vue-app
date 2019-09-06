<template>
  <div class="app-wrapper">
    <form>
      <input type="text" value="" v-model="projectName" placeholder="请输入项目名称">
      <input type="file" v-on:change="getFile($event)">
      <button @click="submitForm($event)">上传</button>
    </form>
    <el-container>
      <el-container>
        <el-header style="text-align: right; font-size: 12px;background: #203670;">
          <div class="navbar">
            <div class="right-menu">
              <el-menu class="" mode="horizontal" background-color="#203670" text-color="#fff" active-text-color="#ffd04b">
                <el-menu-item index="1"><i class="iconfont el-ico-thirdzongshu"></i>综合情况</el-menu-item>
                <el-menu-item index="2"><i class="iconfont el-ico-thirdziyuan"></i>资源目录</el-menu-item>
                <el-menu-item index="3"><i class="iconfont el-ico-thirdshenji"></i>审计项目</el-menu-item>
                <el-menu-item index="4"><i class="iconfont el-ico-thirdyujing"></i>预警分析</el-menu-item>
                <el-menu-item index="5"><i class="iconfont el-ico-thirdwenti"></i>共性问题</el-menu-item>
                <el-menu-item index="6"><i class="iconfont el-ico-thirddianxinganli"></i>典型案例</el-menu-item>
              </el-menu>
            </div>
          </div>
        </el-header>
        <el-main>
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <Chart style="min-width: 600px; min-height: 400px; float:left" :testdata="pp" :chartOption="chartOption" @sendyear="getyear"></Chart>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <mapChart style="min-width: 600px; min-height: 400px; float:left" @sendzq="getzq"></mapChart>
              </div>
            </el-col>
          </el-row>
          <el-table :data="
              tableData.filter(
                data =>
                  !search ||
                  data.name.toLowerCase().includes(search.toLowerCase())
              )
            " style="width: 100%">
            <el-table-column prop="name" label="地区" width="180">
            </el-table-column>
            <el-table-column prop="gd" label="耕地" width="180">
            </el-table-column>
            <el-table-column prop="yl" label="园林" width="180">
            </el-table-column>
            <el-table-column prop="ld" label="林地" width="180">
            </el-table-column>
            <el-table-column prop="hm" label="荒漠" width="180">
            </el-table-column>
            <el-table-column prop="cd" label="草地" width="180">
            </el-table-column>
            <el-table-column prop="sy" label="水域" width="180">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import Chart from "../components/Chart.vue";
import mapChart from "../components/MapChart.vue";
import options from "../views/chart-options/Options";
export default {
  name: "app",
  data() {
    return {
      chartOption: options.chartOption,
      sdata: options.sdata,
      tableData: [],
      pp: [{ name: '11', 'value': '22' }],
      search: "",
      uploadURL: "http://localhost:24477/api/Values/upload",
      projectName: "",
      file: ""
    };
  },
  components: { Sidebar, Chart, mapChart },
  computed: {
    mapSearch: function () { }
  },
  created() {
    this.getData();
  },
  mounted() { },
  methods: {
    /* async getData() {
      this.tableData = [
        {
          name: "福州",
          gd: 1729547,
          ld: 3318255,
          yl: 434356,
          hm: 19391,
          cd: 101660,
          sy: 21313
        },
        {
          name: "南平",
          gd: 3318255,
          ld: 112323,
          yl: 3318255,
          hm: 223213,
          cd: 535353,
          sy: 57997
        },
        {
          name: "三明",
          gd: 338255,
          ld: 11223,
          yl: 331255,
          hm: 22313,
          cd: 53553,
          sy: 57997
        }
      ];
    }, */
    getyear(msg) {
      alert(msg);
    },
    getzq(msg) {
      this.search = msg;
    },
    getData() {
      debugger
      this.$api.post('http://localhost:5005/InfoTask/GetTaskList', { pageIndex: 1, pageSize: 5 }, res => {
      })
    },
    getFile(event) {
      this.file = event.target.files[0];
      console.log(this.file);
    },
    submitForm(event) {      debugger;
      event.preventDefault();
      let formData = new FormData();
      formData.append("file", this.file);

      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      this.$api.post(this.uploadURL, formData, res => {
        debugger
      })

      // this.$http
      //   .post(this.uploadURL, formData, config)
      //   .then(function (response) {
      //     if (response.status === 200) {
      //       console.log(response.data);
      //     }
      //   });
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  width: 800px;
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
