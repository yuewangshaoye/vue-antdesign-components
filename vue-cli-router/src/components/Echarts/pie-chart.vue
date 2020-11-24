<template>
  <div id="main" class="main"></div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "Echarts",
  methods: {
    myEcharts() {
      var myChart = echarts.init(document.getElementById("main"));
      var option = {
        title: {
          text: "设备总数:45",
          left: "center",
          textStyle: {
            fontsize: 33,
            color: "#FFFFFF",
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        series: [
          {
            name: "门禁系统",
            type: "pie",
            radius: "60%",
            center: ["50%", "60%"],
            itemStyle: {
              normal: {
                label: {
                  textStyle: {
                    color: "#FFFFFF",
                    fontSize: 20,
                    fontWeight: "bold",
                  },
                },
                labelLine: {
                  lineStyle: {
                    color: "#309FE7",
                  },
                },
              },
            },
            data: [
              { value: 45, name: "人脸门禁" },
              { value: 45, name: "指纹门禁" },
              { value: 45, name: "刷卡门禁" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
        color: ["#276DE9", "#2CD431", "#F7FC46"],
      };
      myChart.setOption(option);
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.myEcharts();
    });
  },
};
</script>
<style  scoped>
.main {
  width: 725px;
  height: 300px;
  background: #0d85f4;
}
</style>
