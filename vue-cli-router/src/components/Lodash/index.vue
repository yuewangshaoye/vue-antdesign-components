<template>
  <div>
    <h1>lodash测试</h1>
  </div>
</template>
<script>
import _ from "lodash";
// let arr=["w","e","r","y","ko"];
// console.log(_.chunk(arr,3));
// document.write(_.chunk(arr,3));
export default {
  data() {
    return {};
  },
  methods: {
    aa() {
      let arr = ["w", "e", "r", "y", "ko"];
      console.log(_.chunk(arr, 3));
    }
  },
  mounted() {
    this.aa();
  },
};
</script>
<style  scoped>
</style>